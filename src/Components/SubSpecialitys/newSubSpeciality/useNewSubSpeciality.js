import { useEffect, useState } from 'react';
import useForm from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import { createSubSpeciality } from '../../../graphql/mutations';
import { listSpecialitys } from '../../../graphql/queries';
import Swal from 'sweetalert2';

const useNewSubSpeciality = () => {
	const { register, handleSubmit, errors, formState } = useForm();
	let history = useHistory();
	const [ error, setError ] = useState(false);
	const [ loading, setLoading ] = useState(true);
	const [ api, setApi ] = useState({});
	const [speciality, setSpeciality] = useState([]);

	useEffect(
		() => {
			let didCancel = false;
			const fetch = async () => {
				var spec = [];
				var _spec = [];

				try {
					spec = await API.graphql(graphqlOperation(listSpecialitys, {limit: 400}));

					spec.data.listSpecialitys.items.forEach(element => {
						var item = {value: element.id, label: element.name};
						_spec.push(item);
					});

				} catch (e) {
					setError(true);
					setLoading(false);
					console.log(e);
				}

				if (!didCancel) {
					setApi({
						specialities: _spec
					});
					setLoading(false);	
				}

				return () => {
					didCancel = true;
				};
			};

			fetch();
		},
		[ ]
	);

	const onSubmit = async (input) => {
		if (speciality.value === undefined) {
			Swal.fire('Ha ocurrido un error', 'Debe completar el campo especialidad', 'error');
			return
		}
		try {
			await API.graphql(graphqlOperation(createSubSpeciality, { input: {name: input.name, code: input.code, SpecialitySubSpecialityId: speciality.value } }));
			await Swal.fire('Correcto', 'El elemento se ha creado correctamente', 'success');
			history.push('/subspecialitys');
		} catch (error) {
			Swal.fire('Ha ocurrido un error', 'Intentelo de nuevo mas tarde', 'error');
		}
	};

	return { onSubmit, register, handleSubmit, errors, formState, error, loading, api, setSpeciality };
};

export default useNewSubSpeciality;
