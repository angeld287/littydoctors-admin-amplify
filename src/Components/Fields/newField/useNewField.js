import { useEffect, useState } from 'react';
import useForm from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import { createField } from '../../../graphql/mutations';
import { listMedicalAnalysiss } from '../../../graphql/queries';
import Swal from 'sweetalert2';

const useNewField = () => {
	const { register, handleSubmit, errors, formState } = useForm();
	const [modules, setModules] = useState([""]);
	const [ api, setApi ] = useState({});
	let history = useHistory();
	const [ error, setError ] = useState(false);
	const [ loading, setLoading ] = useState(true);

	useEffect(
		() => {
			let didCancel = false;
			const fetch = async () => {
				var _analysis = [];
				var _codes = [];

				try {
					_analysis = await API.graphql(graphqlOperation(listMedicalAnalysiss));

					_analysis.data.listMedicalAnalysiss.items.forEach(element => {
						var item = {value: element.id, label: element.name};
						_codes.push(item);
					});

				} catch (e) {
					setError(true);
					setLoading(false);
					console.log(e);
				}

				if (!didCancel) {
					setApi({
						codes: _codes
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

		const _m = [];
		modules.forEach( e => {
				_m.push(e.value)
			}
		);

		try {
			await API.graphql(graphqlOperation(createField, { input: {name: input.name, modules: _m } }));
			await Swal.fire('Correcto', 'El elemento se ha creado correctamente', 'success');
			history.push('/fields');
		} catch (error) {
			Swal.fire('Ha ocurrido un error', 'Intentelo de nuevo mas tarde', 'error');
		}
	};

	return { onSubmit, register, handleSubmit, errors, formState, modules, setModules, api, error, loading };
};

export default useNewField;