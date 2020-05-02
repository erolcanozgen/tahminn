import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../../src/components/login/login'
export default function Routes() {
    return (
        <Switch>
            <Route path="/" component={Login} />
            <Route path="/login" exact component={Login} />
        </Switch>
    );
}