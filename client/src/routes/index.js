import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../../src/components/login/login'
import Dashboard from '../../src/components/dashboard/dashboard'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
export default function Routes() {
    return (
        <Switch>
            <Route path='/registration' component={Login}></Route>
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