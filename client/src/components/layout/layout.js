import React, { Component } from 'react'
import NavigationBar from '../navbar/navbar'
import Dashboard from '../dashboard/dashboard'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './layout.css'

class Layout extends Component {

    render() {
        return (
            <div>
                <NavigationBar user={this.props.user} ></NavigationBar>
                <div className="container">
                    <Switch>
                        <Route path="/" component={Dashboard} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Layout