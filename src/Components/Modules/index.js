import React, { Component } from 'react';

import { MDBDataTable, MDBBtn, MDBIcon, MDBContainer, MDBModal, MDBModalBody, MDBRow, MDBCol } from 'mdbreact';

import {API, graphqlOperation } from 'aws-amplify';

import { listModules } from '../../graphql/custom-queries';
import { getModule } from '../../graphql/queries';

import { createModule} from '../../graphql/mutations'

import CreateModule from './create';
import EditModule from './edit';
import Field from './../Fields/';
import Fields from './../Fields/list';

class Modules extends Component {

    constructor(props){
        super(props);
        this.state = {
            modules: null,
            module: null,
            OpenModal: false,
            objectToCreate: {
                name: '',
                description: ''
            },
            isCreate: false,
            isEdit: false
        };

        this.toggleOpenEdit = this.toggleOpenEdit.bind(this)
        this.toggleClose = this.toggleClose.bind(this)
        this.create = this.create.bind(this)
        this.update = this.update.bind(this)
        this.editField = this.editField.bind(this)
    }


    componentDidMount(){
        this.getModules();
    }

    getModules = () => {
        API.graphql(graphqlOperation(listModules)).then( result =>{
            this.setState({modules: result.data.listModules.items});
        })
    }

    GetModuleDetails = (item) => {
        API.graphql(graphqlOperation(getModule, {id: item.id})).then( result =>{
            const moduleCharged = result.data.getModule;
            this.setState({OpenModal: true, module: moduleCharged, isCreate: false, isEdit: true})
        })
    }

    toggleOpenCreate = () => {
        this.setState({OpenModal: true, isCreate: true, isEdit: false})
    }

    toggleOpenEdit = (item) => {
        this.GetModuleDetails(item)
    }

    toggleClose = () => {
        this.setState({module: null, OpenModal: false, isCreate: false, isEdit: false})
    }

    create = () => {
         API.graphql(graphqlOperation(createModule, {input: this.state.objectToCreate})).then( result =>{
            const _module = result.data.createModule
            this.setState({OpenModal: false})
            const modules = [
                ...this.state.modules.filter(m => {
                return (
                    m.id !== _module.id
                )
                }),
                _module
            ]
            
            this.setState({ modules });
        })
    }

    update = () => {
         API.graphql(graphqlOperation(createModule, {input: this.state.objectToCreate})).then( result =>{
            const _module = result.data.createModule
            this.setState({OpenModal: false})
            const modules = [
                ...this.state.modules.filter(m => {
                return (
                    m.id !== _module.id
                )
                }),
                _module
            ]
            
            this.setState({ modules });
        })
    }

    editField = (field, value) => {
        this.setState(prevState => ({
            objectToCreate: {                  
                ...prevState.objectToCreate,
                [field]: value
            }
        }))
    }

    render() { 

        const {isCreate, isEdit } = this.state;

        const _module = this.state.module;

        const columns = [
            {label: 'ID', field: 'id', sort: 'asc', width: 270 },
            {label: 'Nombre', field: 'name', sort: 'asc', width: 200},
            {label: 'Description', field: 'description', sort: 'asc', width: 200},
            {label: 'Opciones', field: 'options', sort: 'asc', width: 200}
        ];

        const dummy = [
            {
                id: 'dummy',
                name: 'citas',
                description: 'Modulo de manejo de citas',   
                options: <MDBBtn>none</MDBBtn> 
            }
        ];

        const modules = this.state.modules === null ? dummy : this.state.modules;
        
        const rows = [];

        [].concat(modules)
                .sort((a, b) => {
                    if(a.name > b.name){return 1}
                    if(a.name < b.name){return -1}
                    return 0
                })
                .map((_module,i)=> 
                    {
                        const fieldsNo = "asdas"//(_module.fields === null ? (0) : _module.fields.items.length);
                        const row = {
                            id: _module.id,
                            name: _module.name,
                            description: _module.description, 
                            options: <MDBBtn floating social="tw" size="sm" onClick={
                                (e) =>{
                                    e.preventDefault()
                                    this.toggleOpenEdit(_module)
                                }
                            }>Edit</MDBBtn>
                        }
                        rows.push(row);
                    }
                );
        
        const data = {
            columns,
            rows
        }


        const object = this.state.objectToCreate

        return (
            <MDBContainer>
                <MDBBtn size="sm" onClick={this.toggleOpenCreate}>Crear Modulo</MDBBtn>
                <MDBDataTable
                    striped
                    bordered
                    small
                    data={data}
                />

                <MDBModal isOpen={this.state.OpenModal} toggle={this.toggleClose} fullHeight position="top">
                    <MDBModalBody>
                        {(isCreate && !isEdit) &&<CreateModule create={this.create} editField={this.editField} object={object}/>}
                        {(!isCreate && isEdit) &&
                        <MDBContainer>
                            <MDBRow>
                                <MDBCol className="lg-0 mb-4">
                                    <EditModule update={this.update} editField={this.editField} _module={_module}/>
                                </MDBCol>
                            </MDBRow>
                            
                            <MDBRow>
                                <MDBCol lg="6" className="lg-0 mb-4">
                                    <Fields/>
                                </MDBCol>
                                <MDBCol lg="6" className="lg-0 mb-4">
                                    <Field/>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                        }
                    </MDBModalBody>
                </MDBModal>
            </MDBContainer>
        );
    }
}
 
export default Modules;