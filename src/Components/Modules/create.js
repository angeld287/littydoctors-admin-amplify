import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';

const CreateModule = ({object: o, editField: edit, create: create}) => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h5 text-center mb-4">Create Module</p>
            <div className="grey-text">
              <MDBInput
                label="Name"
                type="text"
                onChange={(e) => {
                    e.preventDefault();
                    edit('name', e.target.value)
                }}
                value={o.name}
              />
              <MDBInput
                type="textarea"
                label="Description"
                onChange={(e) => {
                    e.preventDefault();
                    edit('description', e.target.value)
                }}
                value={o.description}
              />
            </div>
            <div className="text-center">
              <MDBBtn outline color="secondary"  onClick={create}>
                Create <MDBIcon far icon="paper-plane" className="ml-1"/>
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default CreateModule;