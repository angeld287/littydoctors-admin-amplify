import { useEffect, useState } from 'react';
import useForm from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import { createCategory } from '../../../graphql/mutations';
import Swal from 'sweetalert2';

const useNewCategory = () => {
	const { register, handleSubmit, errors, formState } = useForm();
	let history = useHistory();

	const onSubmit = async (input) => {
		try {
			const result = await API.graphql(graphqlOperation(createCategory, { input: {name: input.name, description: input.description, module: input.module } }));
			console.log(result);
			
			await Swal.fire('Correcto', 'El elemento se ha creado correctamente', 'success');
			//history.push('/categories');
		} catch (error) {
			Swal.fire('Ha ocurrido un error', 'Intentelo de nuevo mas tarde', 'error');
		}
	};

	return { onSubmit, register, handleSubmit, errors, formState };
};

export default useNewCategory;
