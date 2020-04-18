import React, { useState, useEffect, Fragment } from 'react';
import { Storage } from 'aws-amplify';
import { listReligions } from '../../graphql/queries';
import Swal from 'sweetalert2';
import { deleteReligion } from '../../graphql/mutations';

const useTermsConditions = () => {
	const [ pdfFile, setPdfFile ] = useState([]);
	const [ loading, setLoading ] = useState(false);
	const [ error, setError ] = useState(false);

	useEffect(() => {
	}, []);

	const addPdf = async () => {
		if(pdfFile[0] !== undefined){
            if (pdfFile[0].type === "application/pdf") {
                const filename = "LEGAL_DOCUMENTS/TERMS_CONDITIONS.pdf";
                const putpdf = await Storage.put(filename, pdfFile[0], { contentType: 'application/pdf' }).catch( e => {console.log(e); throw new SyntaxError("Error Storage"); });
            }else{
                Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: 'El tipo de archivo debe ser pdf',
                        showConfirmButton: false,
                        timer: 1500
                });
                return
            }
        }
	};

	return { setPdfFile, error, loading, addPdf };
};

export default useTermsConditions;
