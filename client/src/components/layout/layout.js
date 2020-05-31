import React, { Component } from 'react'
import NavigationBar from '../navbar/navbar'
import Dashboard from '../dashboard/dashboard'
import Profile from '../profile/profile'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './layout.css'

class Layout extends Component {

    render() {
        return (
            <div>
                <NavigationBar user={this.props.user} ></NavigationBar>
                <div className="container">
                    <Switch>
                        <Route path="/profile" component={() => <Profile user={this.props.user} />} />
                        <Route path="/" component={Dashboard} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Layout