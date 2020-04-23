import React, { Component } from 'react'
import './login.css'
import Logo from './components/logo/logo'
import LoginPanel from './components/loginPanel/loginPanel'
import Registration from './components/registration/registration'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class Login extends Component {
  state = {
  }

  render() {
    return (
      <div className="container loginContainer">
        <div className="center-block">
        <div className="row">
            <div className="col-4 no-padding" style={{zIndex: 1}}>
              <Logo></Logo>
            </div>
            <div className="col-8 no-padding">
            <Router>
                <Route path="/login" component={LoginPanel} />
                <Route path="/registration" component={Registration}/>
            </Router>        
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
