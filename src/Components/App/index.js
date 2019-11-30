import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import HeaderLinks from '../HeaderLinks/';

import { Routes } from '../Routes/';

import {API, graphqlOperation, Auth} from 'aws-amplify';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      authState: {
        isLoggedIn: false,
        error: false,
      },
      username: "",
      email: "",
      phonenumber: "",
      user_roll: ""
    };

    this._isMounted = false;
  }

  componentDidMount(){
    this.setLoggedUserData();
  }

  setLoggedUserData = () => {
    Auth.currentSession().then( user => {
      this.setState({
        username: user.accessToken.payload.username,
        email: user.idToken.payload.email,
        phonenumber: user.idToken.payload.phone_number,
        user_roll: user.accessToken.payload['cognito:groups'][0]
      })
    }).catch( err => {
    })
  }


  handleUserSignIn = async () => {
    this.setState({ authState: { isLoggedIn: true } });

    const user = await Auth.currentSession();
    this.setState({
      username: user.accessToken.payload.username,
      email: user.idToken.payload.email,
      phonenumber: user.idToken.payload.phone_number,
      user_roll: user.accessToken.payload['cognito:groups'][0]
    })
  };

  handleUserLogOut = () => {
    this.setState({ authState: { isLoggedIn: false } });
  }; 
  
  render() {

    const childProps = {
      isLoggedIn: this.state.authState.isLoggedIn,
      onUserSignIn: this.handleUserSignIn,
      onUserLogOut: this.handleUserLogOut,
      state: this.state
    };


    return (
      <div className="App">
        <HeaderLinks childProps={childProps}/>
        <Routes childProps={childProps} />
      </div>
    );
  }
}