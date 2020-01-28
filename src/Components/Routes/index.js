import React from 'react';

import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Home from './../Home';
import AuthComponent from './../Authentication/AuthComponent';
import Allergies from '../Allergies';
import NewAllergy from '../Allergies/newAllergy';
import EditAllergy from '../Allergies/editAllergy';

export const Routes = ({ childProps }) => (
  <Switch>
    <Route exact path="/" render={() => <Home/>} />
    <ProppedRoute exact path="/signin" render={AuthComponent} props={childProps} />
    <ProtectedRouteAdmin exact path="/allergies" render={Allergies} props={childProps} />
    <ProtectedRouteAdmin exact path="/allergies/new" render={NewAllergy} props={childProps} />
    <ProtectedRouteAdmin exact path="/allergies/:id/edit" render={EditAllergy} props={childProps} />
  </Switch>
);

export const ProtectedRouteClients = ({ render: C, props: childProps, ...rest }) => (
  <Route
    {...rest}
    render={rProps =>
      (childProps.isLoggedIn) ? (
          (childProps.state.user_roll === "client") ? (
            <C {...rProps} {...childProps} />
          ) : (<Redirect to="/modules"/>)
      ) : (
        <Redirect
          to={`/signin?redirect=${rProps.location.pathname}${
            rProps.location.search
          }`}
        />
      )
    }
  />
);

export const ProtectedRouteAdmin = ({ render: C, props: childProps, ...rest }) => (
  <Route
    {...rest}
    render={rProps =>
      (childProps.isLoggedIn) ? (
          (childProps.state.user_roll === "admin") ? (
            <C {...rProps} {...childProps} />
          ) : (<Redirect to="/"/>)
      ) : (
        <Redirect
          to={`/signin?redirect=${rProps.location.pathname}${
            rProps.location.search
          }`}
        />
      )
    }
  />
);

export const ProtectedRoute = ({ render: C, props: childProps, ...rest }) => (
  <Route
    {...rest}
    render={rProps =>
      childProps.isLoggedIn ? (
        <C {...rProps} {...childProps} />
      ) : (
        <Redirect
          to={`/signin?redirect=${rProps.location.pathname}${
            rProps.location.search
          }`}
        />
      )
    }
  />
);

export const ProppedRoute = ({ render: C, props: childProps, ...rest }) => (
  <Route {...rest} render={rProps => <C {...rProps} {...childProps} />} />
);