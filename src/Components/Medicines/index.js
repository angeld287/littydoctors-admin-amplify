import React, { Fragment } from 'react';
import useMedicines from './useMedicines';
import { Link } from 'react-router-dom';
import { MDBContainer, MDBBox, MDBDataTable, MDBBtn, MDBSpinner, MDBRow } from 'mdbreact';

import './index.css';

const Medicines = () => {
	const { items, error, loading, handleDelete } = useMedicines();

	const data = () => {
		var formated = [];
		items.forEach((item) => {
			formated.push({
				name: item.name,
				code: item.code,
				drug_concentration: item.drug_concentration,
				chemical_composition: item.chemical_composition,
				options: (
					<Fragment>
						<Link to={`medicines/${item.id}/edit`} className="btn btn-success btn-sm">
							Editar
						</Link>
						<MDBBtn color="red" size="sm" onClick={() => handleDelete(item.id)}>
							Borrar
						</MDBBtn>
					</Fragment>
				)
			});
		});

		return {
			columns: [
				{
					label: 'Nombre',
					field: 'name',
					sort: 'asc'
				},
				{
					label: 'Codigo',
					field: 'code',
					sort: 'asc'
				},
				{
					label: 'Concentracion de Medicamento',
					field: 'drug_concentration',
					sort: 'asc'
				},
				{
					label: 'Componentes Quimicos',
					field: 'chemical_composition',
					sort: 'asc'
				},
				{
					label: 'Opciones',
					field: 'options',
					sort: 'disabled'
				}
			],
			rows: formated
		};
	}

	if (loading) {
		return (
			<MDBContainer>
				<MDBRow display="flex" justifyContent="center" className="mt-5">
					<MDBSpinner big />
				</MDBRow>
			</MDBContainer>
		);
	}

	if (error) return <h2>Ha ocurrido un error</h2>;

	return (
		<MDBContainer>
			<Link to={`medicines/new`} className="btn btn-primary btn-sm">
				Crear
			</Link>
			<MDBDataTable
				striped
				bordered
				searchLabel="Buscar"
				responsiveSm={true}
				small
				hover
				entries={5}
				btn={true}
				data={data()}
				noRecordsFoundLabel="No se han encontrado datos"
				entriesLabel="Numero de datos"
				entriesOptions={[ 5, 10 ]}
				infoLabel={[ 'Mostrando del', 'al', 'de', 'registros' ]}
				paginationLabel={[ 'Anterior', 'Siguiente' ]}
				noBottomColumns={true}
			/>
		</MDBContainer>
	);
};

export default Medicines;
