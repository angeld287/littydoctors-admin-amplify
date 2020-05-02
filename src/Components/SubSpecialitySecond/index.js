import React, { Fragment } from 'react';
import useSubSpecialitysSecond from './useSubSpecialitysSecond';
import { Link } from 'react-router-dom';
import { MDBContainer, MDBBox, MDBDataTable, MDBBtn, MDBSpinner, MDBRow } from 'mdbreact';

import './index.css';

const SubSpecialitysSecond = () => {
	const { items, error, loading, handleDelete } = useSubSpecialitysSecond();

	const data = () => {
		var formated = [];
		items.forEach((item) => {
			formated.push({
				name: item.name,
				code: item.code,
				options: (
					<Fragment>
						<Link to={`subspecialityssecond/${item.id}/edit`} className="btn btn-success btn-sm">
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
			<Link to={`subspecialityssecond/new`} className="btn btn-primary btn-sm">
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

export default SubSpecialitysSecond;
