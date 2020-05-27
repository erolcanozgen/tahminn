import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../../src/components/login/login'
import Layout from '../../src/components/layout/layout'
import PublicRoute from './PublicRoute'
import RegistrationRoute from './RegistrationRoute'
import LayoutRoute from './LayoutRoute';
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
            <LayoutRoute
                path="/"
                component={Layout}
            />

        </Switch>
    );
}