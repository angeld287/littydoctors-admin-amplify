import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBSpinner } from 'mdbreact';
import useNewSubSpeciality from './useNewSubSpeciality';
import Select from 'react-select';

const NewSubSpeciality = () => {
	const { onSubmit, register, handleSubmit, errors, formState, setSpeciality, error, loading, api } = useNewSubSpeciality();

	if ( loading ) return <MDBSpinner />;

	if (error) {
		return (
			<MDBContainer className="mt-4">
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
									Codigo:
								</label>
								<input
									name="code"
									autoComplete="off"
									className="form-control"
									ref={register({ required: { message: 'Este campo es requerido', value: true } })}
								/>
								{errors.code && <span className="text-danger mb-2">{errors.code.message}</span>}

								<br />

								<label htmlFor="modules" className="grey-text font-weight-light">
									Especialidad:
								</label>
								<div>
									<Select id="modules" options={api.specialities} onChange={ (v) => {setSpeciality(v)}} />
								</div>
								<br/>

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

export default NewSubSpeciality;
