import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBSpinner } from 'mdbreact';
import useEditSurgicalIntervention from './useEditSurgicalIntervention';

const EditSurgicalIntervention = () => {
	const { onSubmit, item, register, handleSubmit, errors, error } = useEditSurgicalIntervention();

	if (Object.entries(item).length === 0 && item.constructor === Object) return <MDBSpinner />;

	if (error) {
		return (
			<MDBContainer>
				<h3>Ha ocurrido un error</h3>
			</MDBContainer>
		);
	}

	return (
		<MDBContainer>
			<MDBRow className="mt-5" center={true}>
				<MDBCol md="6">
					<MDBCard>
						<MDBCardBody>
							<form onSubmit={handleSubmit(onSubmit)}>
								<p className="h4 text-center py-4">Editar Elemento</p>

								<label htmlFor="name" className="grey-text font-weight-light">
									Nombre:
								</label>
								<input
									name="name"
									autoComplete="off"
									defaultValue={item.name}
									className="form-control"
									ref={register({ required: { message: 'Este campo es requerido', value: true } })}
								/>
								{errors.name && <span className="text-danger mb-2">{errors.name.message}</span>}

								<br />

								<label htmlFor="description" className="grey-text font-weight-light">
									Descripcion:
								</label>
								<input
									name="description"
									autoComplete="off"
									className="form-control"
									defaultValue={item.description}
									ref={register({ required: { message: 'Este campo es requerido', value: true } })}
								/>
								{errors.description && <span className="text-danger mb-2">{errors.description.message}</span>}

								<div className="text-center py-4 mt-3">
									<MDBBtn className="btn btn-outline-blue" type="submit">
										Guardar
									</MDBBtn>
								</div>
							</form>
						</MDBCardBody>
					</MDBCard>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
};

export default EditSurgicalIntervention;
