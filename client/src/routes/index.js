import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../../src/components/login/login'
import Dashboard from '../../src/components/dashboard/dashboard'
import PublicRoute from './PublicRoute'
import RegistrationRoute from './RegistrationRoute'
import DashboardRoute from './DashboardRoute';
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
            <DashboardRoute
                path="/"
                component={Dashboard}
            />

        </Switch>
    );
}