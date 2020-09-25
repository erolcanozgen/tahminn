import React, { Component } from 'react'
import NavigationBar from '../navbar/navbar'
import Dashboard from '../dashboard/dashboard'
import Profile from '../profile/profile'
import ActivityPane from '../activityPane/activityPane'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './layout.css'
import Prediction from '../prediction/prediction'
import PredictionDetails from '../prediction/predictionDetails/predictionDetails'

class Layout extends Component {

    render() {
        return (
            <div>
                <NavigationBar user={this.props.user} ></NavigationBar>
                <div className="container">
                    <div className="row m-1 m-lg-0">
                        <div className="col-12 col-lg-9" id="main-pane">
                            <Switch>
                                <Route path="/profile" component={() => <Profile user={this.props.user} />} />
                                <Route path="/prediction/prediction-details" component={() => <PredictionDetails initialPos={this.props.location.state.initialPos} user={this.props.user} />} />
                                <Route path="/prediction" component={() => <Prediction user={this.props.user} />} />
                                <Route path="/" component={Dashboard} />
                            </Switch>
                        </div>
                        <div className="d-none d-lg-block col-lg-3" id="activity-pane">
                            <ActivityPane></ActivityPane>
                        </div>
                    </div>    
                </div>
            </div>
        )
    }
}

export default Layout