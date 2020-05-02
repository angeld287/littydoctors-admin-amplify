import React, { useState, useEffect, Fragment } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listSubSpecialitys } from '../../graphql/queries';
import Swal from 'sweetalert2';
import { deleteSubSpeciality } from '../../graphql/mutations';

const useSubSpecialitys = () => {
	const [ items, setItems ] = useState([]);
	const [ loading, setLoading ] = useState(true);
	const [ error, setError ] = useState(false);

	useEffect(() => {
		let didCancel = false;

		const fetch = async () => {
			var api = [];

			try {
				api = await API.graphql(graphqlOperation(listSubSpecialitys));
			} catch (error) {
				setLoading(false);
				setError(true);
			}

			if (!didCancel) {
				setItems(api.data.listSubSpecialitys.items);
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
				await API.graphql(graphqlOperation(deleteSubSpeciality, { input }));
				Swal.fire('Eliminado correctamente!', '', 'success');
				setItems(items.filter((item) => item.id !== id));
			} catch (error) {
				Swal.fire('Error', 'Intentelo nuevamente', 'error');
			}
		}
	};

	return { items, error, loading, handleDelete };
};

export default useSubSpecialitys;
