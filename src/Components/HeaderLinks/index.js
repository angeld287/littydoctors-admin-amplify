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

  redirectAllergies = () => {
    window.location.href = "/allergies"
  }

  redirectHome = () => {
    window.location.href = "/"
  }

  render() {
    return (
        <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
          <li style={{display: 'inline'}}><button onClick={this.redirectHome}>Home</button></li>
          {this.props.childProps.state.user_roll === 'admin' && <li style={{display: 'inline'}}><button onClick={this.redirectAllergies}>Alergias</button></li>}
          {!this.props.childProps.isLoggedIn && <li style={{display: 'inline'}}><button onClick={this.redirectSignIn}>LogIn</button></li>}
          {this.props.childProps.isLoggedIn && <li style={{display: 'inline'}}><button onClick={this.handlesignOut}>Logout</button></li>}
        </ul>
    );
  }
}