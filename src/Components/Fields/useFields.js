import React, { useState, useEffect, Fragment } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listFields } from '../../graphql/queries';
import Swal from 'sweetalert2';
import { updateField } from '../../graphql/mutations';

const useFields = () => {
	const [ items, setItems ] = useState([]);
	const [ loading, setLoading ] = useState(true);
	const [ error, setError ] = useState(false);

	useEffect(() => {
		let didCancel = false;

		const fetch = async () => {
			var api = [];

			const filter = {
				filter: {
					deleted: {eq: false}
				},
				limit: 400
			};

			try {
				api = await API.graphql(graphqlOperation(listFields, filter));
			} catch (error) {
				console.log(error);
				
				setLoading(false);
				setError(true);
			}

			if (!didCancel) {
				setItems(api.data.listFields.items);
				setLoading(false);
			}
		};

		fetch();

		return () => {
			didCancel = true;
		};
	}, []);

	const handleDelete = async (id) => {
		const result = await Swal.fire({
			title: '¿Desea eliminar el elemento?',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Eliminar',
			cancelButtonText: 'Cancelar'
		});

		var input = {
			id: id,
			deleted: true,
			deletedAt: new Date()	
		};

		if (result.value) {
			try {
				await API.graphql(graphqlOperation(updateField, { input }));
				Swal.fire('Eliminado correctamente!', '', 'success');
				setItems(items.filter((item) => item.id !== id));
			} catch (error) {
				Swal.fire('Error', 'Intentelo nuevamente', 'error');
			}
		}
	};

	return { items, error, loading, handleDelete };
};

export default useFields;
