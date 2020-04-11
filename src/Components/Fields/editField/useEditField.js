import { useEffect, useState } from 'react';
import useForm from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import { getField, listMedicalAnalysiss } from '../../../graphql/queries';
import { updateField } from '../../../graphql/mutations';
import Swal from 'sweetalert2';

const useEditField = () => {
	let history = useHistory();
	let { id } = useParams();
	const [ item, setItem ] = useState({});
	const [ modules, setModules ] = useState({});
	const [ modulesToEdit, setModulesToEdit ] = useState([])
	const [ api, setApi ] = useState({});
	const [ error, setError ] = useState(false);
	const [ loading, setLoading ] = useState(true);
	const { register, handleSubmit, errors } = useForm();

	useEffect(
		() => {
			let didCancel = false;
			const fetch = async () => {
				var _item = [];
				var _analysis = [];
				var _codes = [];

				try {
					_item = await API.graphql(graphqlOperation(getField, { id }));
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
					setItem(_item.data.getField);

					setTimeout(() => {  
						setEditObjects(_item.data.getField, _codes);
						setLoading(false);
					}, 2000);	
				}

				return () => {
					didCancel = true;
				};
			};

			fetch();
		},
		[ id ]
	);

	const setEditObjects = (i, c) =>{
		const _m = [];
		if (i.modules !== null) {
			i.modules.forEach( e => {
				const item = c[c.findIndex(v => v.value === e)];
				_m.push(item)
			});
		}
		setModulesToEdit(_m);
		setModules(_m);
	}

	const onSubmit = async (input) => {
		input.id = id;
		const _m = [];
		if (modules !== null) {
			modules.forEach( e => {
					_m.push(e.value)
				}
			);
		}
		
		try {
			await API.graphql(graphqlOperation(updateField, { input: {id: id, name: input.name,  modules: _m } }));
			await Swal.fire('Correcto', 'El elemento se ha actualizado correctamente', 'success');
			history.push('/fields');
		} catch (e) {
			Swal.fire('Ha ocurrido un error', 'Intentelo nuevamente', 'error');
		}
	};

	return { onSubmit, item, register, handleSubmit, errors, error, modules, setModules, api, loading, modulesToEdit };
};

export default useEditField;
