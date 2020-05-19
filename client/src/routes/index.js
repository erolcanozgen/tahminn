import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../../src/components/login/login'
import Dashboard from '../../src/components/dashboard/dashboard'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import RegistrationRoute from './RegistrationRoute'
export default function Routes() {
    return (
        <Switch>
            <RegistrationRoute
                path="/registration"
                component={Login}
            />
            <PublicRoute
                path="/login"
                component={Login}
            />
            <PrivateRoute
                path="/"
                component={Dashboard}
            />

        </Switch>
    );
}