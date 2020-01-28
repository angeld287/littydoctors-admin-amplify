import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBSpinner } from 'mdbreact';
import useEditMedicine from './useEditMedicine';

const EditMedicine = () => {
	const { onSubmit, item, register, handleSubmit, errors, error } = useEditMedicine();

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

								<label htmlFor="code" className="grey-text font-weight-light">
									Codigo:
								</label>
								<input
									name="code"
									autoComplete="off"
									className="form-control"
									defaultValue={item.code}
									ref={register({ required: { message: 'Este campo es requerido', value: true } })}
								/>
								{errors.code && <span className="text-danger mb-2">{errors.code.message}</span>}
								<br />

								<label htmlFor="drug_concentration" className="grey-text font-weight-light">
									Concentracion de Medicamento:
								</label>
								<input
									name="drug_concentration"
									autoComplete="off"
									className="form-control"
									defaultValue={item.drug_concentration}
									ref={register({ required: { message: 'Este campo es requerido', value: true } })}
								/>
								{errors.drug_concentration && <span className="text-danger mb-2">{errors.drug_concentration.message}</span>}
								<br />

								<label htmlFor="chemical_composition" className="grey-text font-weight-light">
									Concentracion Quimica:
								</label>
								<input
									name="chemical_composition"
									autoComplete="off"
									className="form-control"
									defaultValue={item.chemical_composition}
									ref={register({ required: { message: 'Este campo es requerido', value: true } })}
								/>
								{errors.chemical_composition && <span className="text-danger mb-2">{errors.chemical_composition.message}</span>}
								<br />

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

export default EditMedicine;
