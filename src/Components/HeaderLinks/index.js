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

  redirectModules = () => {
    window.location.href = "/modules"
  }

  redirectHome = () => {
    window.location.href = "/"
  }

  render() {
    return (
        <ul>
          <li><button onClick={this.redirectHome}>Home</button></li>
          {this.props.childProps.state.user_roll === 'admin' && <li><button onClick={this.redirectModules}>Modules</button></li>}
          {!this.props.childProps.isLoggedIn && <li><button onClick={this.redirectSignIn}>LogIn</button></li>}
          {this.props.childProps.isLoggedIn && <li><button onClick={this.handlesignOut}>Logout</button></li>}
        </ul>
    );
  }
}