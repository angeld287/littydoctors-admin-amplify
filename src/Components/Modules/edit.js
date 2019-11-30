import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';

const EditModule = ({_module: _, editField: edit, update: update}) => {

    const description = (_.description === null) ? (''): (_.description);

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
              <MDBInput
                label="Name"
                type="text"
                onChange={(e) => {
                    e.preventDefault();
                    edit('name', e.target.value)
                }}
                value={_.name}
              />
              <MDBInput
                type="textarea"
                label="Description"
                onChange={(e) => {
                    e.preventDefault();
                    edit('description', e.target.value)
                }}
                value={description}
              />
              <MDBBtn outline color="secondary"  onClick={update}>
                Update <MDBIcon far icon="paper-plane" className="ml-1"/>
              </MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default EditModule;