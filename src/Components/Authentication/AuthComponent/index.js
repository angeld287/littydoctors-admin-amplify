import React, { Component } from 'react';


import { Authenticator, SignIn} from 'aws-amplify-react';
import aws_exports from '../../../aws-exports'; 

import queryString from 'query-string';


export default class AuthComponent extends Component {
  
  
  handleStateChange = state => {
    const values = queryString.parse(this.props.location.search)
    if (state === 'signedIn') {
      this.props.onUserSignIn();
      if(this.props.location.search !== null && this.props.location.search !== ''){
        this.props.history.push(values.redirect);
      }else{
        this.props.history.push('/modules');
      }
    }else if (state === 'signIn') {
      this.props.onUserLogOut();
    }
  };

  render() {
    return (
      <div>
        <Authenticator 
          authState="signIn" 
          hideDefault={false}
          onStateChange={this.handleStateChange}
        >
           
        </Authenticator>
      </div>
    );
  }
}