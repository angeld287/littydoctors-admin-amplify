import { useEffect, useState } from 'react';
import useForm from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import { getSpeciality } from '../../../graphql/queries';
import { updateSpeciality } from '../../../graphql/mutations';
import Swal from 'sweetalert2';

const useEditSpeciality = () => {
	let history = useHistory();
	let { id } = useParams();
	const [ item, setItem ] = useState({});
	const [ error, setError ] = useState(false);
	const { register, handleSubmit, errors } = useForm();

	useEffect(
		() => {
			let didCancel = false;
			const fetch = async () => {
				let api = {};

				try {
					api = await API.graphql(graphqlOperation(getSpeciality, { id }));
				} catch (e) {
					setError(true);
				}

				if (!didCancel) {
					setItem(api.data.getSpeciality);
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
		input.id = id;
		try {
			await API.graphql(graphqlOperation(updateSpeciality, { input: {id: id, name: input.name, code: input.code } }));
			await Swal.fire('Correcto', 'El elemento se ha actualizado correctamente', 'success');
			history.push('/specialitys');
		} catch (e) {
			Swal.fire('Ha ocurrido un error', 'Intentelo nuevamente', 'error');
		}
	};

	return { onSubmit, item, register, handleSubmit, errors, error  };
};

export default useEditSpeciality;
