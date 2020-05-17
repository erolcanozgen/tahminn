import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import authenticationService from '../services/authentication'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        authenticationService.IsLoggedIn()
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )

export default PrivateRoute;