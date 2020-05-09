import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../../src/components/login/login'
import Interest from "../../src/components/interest/interestSelection"

export default function Routes() {
    return (
        <Switch>
            <Route path="/interest" exact component={Interest} />
            <Route path="/login" exact component={Login} />
            <Route path="/" component={Login} />

        </Switch>
    );
}