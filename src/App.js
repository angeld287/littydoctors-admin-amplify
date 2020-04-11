import React from 'react';

import {
  BrowserRouter as Router,
} from 'react-router-dom';

import Amplify from 'aws-amplify';
import aws_exports from './aws-exports'; 

import App from './Components/App';

Amplify.configure(aws_exports); 

const AppWithRouter = () => (<Router><App /></Router>);

export default AppWithRouter;