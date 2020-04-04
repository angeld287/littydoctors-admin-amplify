import React from 'react';

import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Home from './../Home';
import AuthComponent from './../Authentication/AuthComponent';

//allergies
import Allergies from '../Allergies';
import NewAllergy from '../Allergies/newAllergy';
import EditAllergy from '../Allergies/editAllergy';

//diseases
import Diseases from '../Diseases';
import NewDisease from '../Diseases/newDisease';
import EditDisease from '../Diseases/editDisease';

//medicalanalysis
import MedicalAnalysis from '../MedicalAnalysis';
import NewMedicalAnalysis from '../MedicalAnalysis/newMedicalAnalysis';
import EditMedicalAnalysis from '../MedicalAnalysis/editMedicalAnalysis';

//surgicalinterventions
import SurgicalIntervention from '../SurgicalInterventions';
import NewSurgicalIntervention from '../SurgicalInterventions/newSurgicalIntervention';
import EditSurgicalIntervention from '../SurgicalInterventions/editSurgicalIntervention';

//medicines
import Medicines from '../Medicines';
import NewMedicine from '../Medicines/newMedicine';
import EditMedicine from '../Medicines/editMedicine';

//categories
import Categorys from '../Category';
import NewCategory from '../Category/newCategory';
import EditCategory from '../Category/editCategory';

//religions
import Religions from '../Religions';
import NewReligion from '../Religions/newReligion';
import EditReligion from '../Religions/editReligion';

//specialty
import Specialtys from '../Specialtys';
import NewSpecialty from '../Specialtys/newSpecialty';
import EditSpecialty from '../Specialtys/editSpecialty';

export const Routes = ({ childProps }) => (
  <Switch>
    <Route exact path="/" render={() => <Home/>} />
    <ProppedRoute exact path="/signin" render={AuthComponent} props={childProps} />
    <ProtectedRouteAdmin exact path="/allergies" render={Allergies} props={childProps} />
    <ProtectedRouteAdmin exact path="/allergies/new" render={NewAllergy} props={childProps} />
    <ProtectedRouteAdmin exact path="/allergies/:id/edit" render={EditAllergy} props={childProps} />
    <ProtectedRouteAdmin exact path="/diseases" render={Diseases} props={childProps} />
    <ProtectedRouteAdmin exact path="/diseases/new" render={NewDisease} props={childProps} />
    <ProtectedRouteAdmin exact path="/diseases/:id/edit" render={EditDisease} props={childProps} />
    <ProtectedRouteAdmin exact path="/medicalanalysis" render={MedicalAnalysis} props={childProps} />
    <ProtectedRouteAdmin exact path="/medicalanalysis/new" render={NewMedicalAnalysis} props={childProps} />
    <ProtectedRouteAdmin exact path="/medicalanalysis/:id/edit" render={EditMedicalAnalysis} props={childProps} />
    <ProtectedRouteAdmin exact path="/surgicalinterventions" render={SurgicalIntervention} props={childProps} />
    <ProtectedRouteAdmin exact path="/surgicalinterventions/new" render={NewSurgicalIntervention} props={childProps} />
    <ProtectedRouteAdmin exact path="/surgicalinterventions/:id/edit" render={EditSurgicalIntervention} props={childProps} />
    <ProtectedRouteAdmin exact path="/medicines" render={Medicines} props={childProps} />
    <ProtectedRouteAdmin exact path="/medicines/new" render={NewMedicine} props={childProps} />
    <ProtectedRouteAdmin exact path="/medicines/:id/edit" render={EditMedicine} props={childProps} />
    <ProtectedRouteAdmin exact path="/categories" render={Categorys} props={childProps} />
    <ProtectedRouteAdmin exact path="/categories/new" render={NewCategory} props={childProps} />
    <ProtectedRouteAdmin exact path="/categories/:id/edit" render={EditCategory} props={childProps} />
    <ProtectedRouteAdmin exact path="/religions" render={Religions} props={childProps} />
    <ProtectedRouteAdmin exact path="/religions/new" render={NewReligion} props={childProps} />
    <ProtectedRouteAdmin exact path="/religions/:id/edit" render={EditReligion} props={childProps} />
    <ProtectedRouteAdmin exact path="/specialtys" render={Specialtys} props={childProps} />
    <ProtectedRouteAdmin exact path="/specialtys/new" render={NewSpecialty} props={childProps} />
    <ProtectedRouteAdmin exact path="/specialtys/:id/edit" render={EditSpecialty} props={childProps} />
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