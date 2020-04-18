import React, { Fragment } from 'react';
import useTermsConditions from './useTermsConditions';
import { Link } from 'react-router-dom';
import { MDBContainer, MDBBox, MDBFileInput, MDBBtn, MDBSpinner, MDBRow } from 'mdbreact';

import './index.css';

const TermsConditions = () => {
	const { setPdfFile, error, loading, addPdf } = useTermsConditions();

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
			 <MDBFileInput className="mb-3" accept='application/pdf' getValue={(e) => setPdfFile(e)}/>
			 <MDBBtn onClick={addPdf}>Agregar Pdf</MDBBtn>
		</MDBContainer>
	);
};

export default TermsConditions;
