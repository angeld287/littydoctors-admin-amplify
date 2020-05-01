import { useEffect, useState } from 'react';
import useForm from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import { createSpecialty } from '../../../graphql/mutations';

import Swal from 'sweetalert2';

const useNewSpecialty = () => {
	const { register, handleSubmit, errors, formState } = useForm();
	let history = useHistory();
	const [ error, setError ] = useState(false);
	const [ loading, setLoading ] = useState(false);
	const [ api, setApi ] = useState({});

	const onSubmit = async (input) => {
		try {
			await API.graphql(graphqlOperation(createSpecialty, { input: {name: input.name, code: input.code } }));
			await Swal.fire('Correcto', 'El elemento se ha creado correctamente', 'success');
			history.push('/specialtys');
		} catch (error) {
			Swal.fire('Ha ocurrido un error', 'Intentelo de nuevo mas tarde', 'error');
		}
	};

	return { onSubmit, register, handleSubmit, errors, formState, error, loading, api };
};

export default useNewSpecialty;
