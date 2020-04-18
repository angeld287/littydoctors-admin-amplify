import React, { Component } from 'react';
import { Auth } from 'aws-amplify';


import logo from '../../images/logo-blanco.png';

export default class HeaderLinks extends Component {

  handlesignOut = () => {
    Auth.signOut().then(d => {
      window.location.reload()
      //this.props.childProps.onUserLogOut();
    });
  }

  redirectSignIn = () => {
    window.location.href = "/signin";
  }

  redirectTo = (to) => {
    window.location.href = "/"+to;
  }

  redirectHome = () => {
    window.location.href = "/"
  }

  render() {
    return (
        <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
          <li style={{display: 'inline'}}><button onClick={this.redirectHome}>Home</button></li>
          {this.props.childProps.state.user_roll === 'admin' && <li style={{display: 'inline'}}><button onClick={ (e) => {e.preventDefault(); this.redirectTo('allergies');}}>Alergias</button></li>}
          {this.props.childProps.state.user_roll === 'admin' && <li style={{display: 'inline'}}><button onClick={ (e) => {e.preventDefault(); this.redirectTo('diseases')}}>Enfermedades</button></li>}
          {this.props.childProps.state.user_roll === 'admin' && <li style={{display: 'inline'}}><button onClick={ (e) => {e.preventDefault(); this.redirectTo('medicalanalysis')}}>Analisis Medicos</button></li>}
          {this.props.childProps.state.user_roll === 'admin' && <li style={{display: 'inline'}}><button onClick={ (e) => {e.preventDefault(); this.redirectTo('surgicalinterventions')}}>Intervenciones Quirurgicas</button></li>}
          {this.props.childProps.state.user_roll === 'admin' && <li style={{display: 'inline'}}><button onClick={ (e) => {e.preventDefault(); this.redirectTo('medicines')}}>Medicamentos</button></li>}
          {this.props.childProps.state.user_roll === 'admin' && <li style={{display: 'inline'}}><button onClick={ (e) => {e.preventDefault(); this.redirectTo('categories')}}>Categorias</button></li>}
          {this.props.childProps.state.user_roll === 'admin' && <li style={{display: 'inline'}}><button onClick={ (e) => {e.preventDefault(); this.redirectTo('religions')}}>Religiones</button></li>}
          {this.props.childProps.state.user_roll === 'admin' && <li style={{display: 'inline'}}><button onClick={ (e) => {e.preventDefault(); this.redirectTo('specialtys')}}>Especialidades</button></li>}
          {this.props.childProps.state.user_roll === 'admin' && <li style={{display: 'inline'}}><button onClick={ (e) => {e.preventDefault(); this.redirectTo('fields')}}>Campos</button></li>}
          {this.props.childProps.state.user_roll === 'admin' && <li style={{display: 'inline'}}><button onClick={ (e) => {e.preventDefault(); this.redirectTo('termsconditions')}}>Terminos y Condiciones</button></li>}
          {!this.props.childProps.isLoggedIn && <li style={{display: 'inline'}}><button onClick={this.redirectSignIn}>LogIn</button></li>}
          {this.props.childProps.isLoggedIn && <li style={{display: 'inline'}}><button onClick={this.handlesignOut}>Logout</button></li>}
        </ul>
    );
  }
}