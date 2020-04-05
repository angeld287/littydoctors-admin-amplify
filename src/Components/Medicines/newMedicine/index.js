import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import useNewMedicine from './useNewMedicine';

const NewMedicine = () => {
	const { onSubmit, register, handleSubmit, errors, formState, setModule } = useNewMedicine();

	return (
		<MDBContainer>
			<MDBRow className="mt-5" center={true}>
				<MDBCol md="6">
					<MDBCard>
						<MDBCardBody>
							<form onSubmit={handleSubmit(onSubmit)}>
								<p className="h4 text-center py-4">Nueva Categoria</p>

								<label htmlFor="name" className="grey-text font-weight-light">
									Nombre:
								</label>
								<input
									name="name"
									autoComplete="off"
									className="form-control"
									ref={register({ required: { message: 'Este campo es requerido', value: true } })}
								/>
								{errors.name && <span className="text-danger mb-2">{errors.name.message}</span>}

								<br />

								<label htmlFor="code" className="grey-text font-weight-light">
									Code:
								</label>
								<input
									name="code"
									autoComplete="off"
									className="form-control"
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
									ref={register({ required: { message: 'Este campo es requerido', value: true } })}
								/>
								{errors.drug_concentration && <span className="text-danger mb-2">{errors.drug_concentration.message}</span>}
								<br />

								<label htmlFor="chemical_composition" className="grey-text font-weight-light">
									Componentes Quimicos:
								</label>
								<input
									name="chemical_composition"
									autoComplete="off"
									className="form-control"
									ref={register({ required: { message: 'Este campo es requerido', value: true } })}
								/>
								{errors.chemical_composition && <span className="text-danger mb-2">{errors.chemical_composition.message}</span>}
								<br />


								<div className="text-center py-4 mt-3">
									<MDBBtn
										className="btn btn-outline-blue"
										type="submit"
										disabled={formState.isSubmitting}
									>
										Agregar
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

export default NewMedicine;
