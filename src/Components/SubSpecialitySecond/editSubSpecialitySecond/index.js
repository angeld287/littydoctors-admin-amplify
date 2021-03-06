import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBSpinner } from 'mdbreact';
import useEditSubSpecialitySecond from './useEditSubSpecialitySecond';
import Select from 'react-select';

const EditSubSpecialitySecond = () => {
	const { onSubmit, item, register, handleSubmit, errors, error, specialities, speciality, setSpeciality } = useEditSubSpecialitySecond();

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
									defaultValue={item.code}
									className="form-control"
									ref={register({ required: { message: 'Este campo es requerido', value: true } })}
								/>
								{errors.code && <span className="text-danger mb-2">{errors.code.message}</span>}

								<br />
								<label htmlFor="modules" className="grey-text font-weight-light">
									Especialidad:
								</label>
								<div>
									<Select id="modules" options={specialities} defaultValue={speciality} onChange={ (v) => {setSpeciality(v)}} />
								</div>
								<br/>
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

export default EditSubSpecialitySecond;
