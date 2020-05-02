import { useEffect, useState } from 'react';
import useForm from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import { listSpecialitys } from '../../../graphql/custom-queries';
import { getSubSpeciality } from '../../../graphql/queries';
import { updateSubSpeciality } from '../../../graphql/mutations';
import Swal from 'sweetalert2';

const useEditSubSpeciality = () => {
	let history = useHistory();
	let { id } = useParams();
	const [ item, setItem ] = useState({});
	const [ error, setError ] = useState(false);
	const { register, handleSubmit, errors } = useForm();
	const [speciality, setSpeciality] = useState([]);
	const [specialities, setSpecialities] = useState([]);


	useEffect(
		() => {
			let didCancel = false;
			const fetch = async () => {
				let api = {};
				var spec = [];
				var _spec = [];
				var _speciality = {};
				var _specialities = {};

				try {
					spec = await API.graphql(graphqlOperation(listSpecialitys, {limit: 400}));
					api = await API.graphql(graphqlOperation(getSubSpeciality, { id }));

					_specialities = spec.data.listSpecialitys.items;

					_specialities.forEach(e => {
						e.subSpeciality.items.forEach( s => {
							if (s.id === id) {
								_speciality = {value: e.id, label: e.name};
								setSpeciality(_speciality);
							}
						});
					});
					
					spec.data.listSpecialitys.items.forEach(element => {
						var item = {value: element.id, label: element.name};
						_spec.push(item);
					});

				} catch (e) {
					setError(true);
				}

				if (!didCancel) {
					setItem(api.data.getSubSpeciality);
					setSpecialities(_spec);
					setSpeciality(_speciality);
				}

				return () => {
					didCancel = true;
				};
			};

			fetch();
		},
		[ id ]
	);

	const onSubmit = async (input) => {
		if (speciality.value === undefined) {
			Swal.fire('Ha ocurrido un error', 'Debe completar el campo especialidad', 'error');
			return
		}

		input.id = id;

		try {
			await API.graphql(graphqlOperation(updateSubSpeciality, { input: {id: id, name: input.name, code: input.code, specialitySubSpecialityId: speciality.value } }));
			await Swal.fire('Correcto', 'El elemento se ha actualizado correctamente', 'success');
			history.push('/subSpecialitys');
		} catch (e) {
			Swal.fire('Ha ocurrido un error', 'Intentelo nuevamente', 'error');
		}
	};

	return { onSubmit, item, register, handleSubmit, errors, error, specialities, speciality, setSpeciality  };
};

export default useEditSubSpeciality;
