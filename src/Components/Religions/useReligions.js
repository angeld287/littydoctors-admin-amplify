import React, { useState, useEffect, Fragment } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listReligions } from '../../graphql/queries';
import Swal from 'sweetalert2';
import { deleteReligion } from '../../graphql/mutations';

const useReligions = () => {
	const [ items, setItems ] = useState([]);
	const [ loading, setLoading ] = useState(true);
	const [ error, setError ] = useState(false);

	useEffect(() => {
		let didCancel = false;

		const fetch = async () => {
			var api = [];

			try {
				api = await API.graphql(graphqlOperation(listReligions));
			} catch (error) {
				setLoading(false);
				setError(true);
			}

			if (!didCancel) {
				setItems(api.data.listReligions.items);
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
			id
		};

		if (result.value) {
			try {
				await API.graphql(graphqlOperation(deleteReligion, { input }));
				Swal.fire('Eliminado correctamente!', '', 'success');
				setItems(items.filter((item) => item.id !== id));
			} catch (error) {
				Swal.fire('Error', 'Intentelo nuevamente', 'error');
			}
		}
	};

	return { items, error, loading, handleDelete };
};

export default useReligions;
