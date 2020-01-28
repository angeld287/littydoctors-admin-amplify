import { useEffect, useState } from 'react';
import useForm from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import { createDisease } from '../../../graphql/mutations';
import Swal from 'sweetalert2';

const useNewDisease = () => {
	const { register, handleSubmit, errors, formState } = useForm();
	let history = useHistory();

	const onSubmit = async (input) => {
		try {
			await API.graphql(graphqlOperation(createDisease, { input: {name: input.name, description: input.description } }));
			await Swal.fire('Correcto', 'El elemento se ha creado correctamente', 'success');
			history.push('/diseases');
		} catch (error) {
			Swal.fire('Ha ocurrido un error', 'Intentelo de nuevo mas tarde', 'error');
		}
	};

	return { onSubmit, register, handleSubmit, errors, formState };
};

export default useNewDisease;
