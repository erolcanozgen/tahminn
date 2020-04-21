import React, { Component } from 'react'
import './login.css'
import Logo from './components/logo/logo'
import LoginPanel from './components/loginPanel/loginPanel'

class Login extends Component {
  state = {
  }

  render() {
    return (
      <div className="container loginContainer">
        <div className="center-block">
        <div class="row">
            <div className="col-4 no-padding" style={{zIndex: 1}}>
              <Logo></Logo>
            </div>
            <div className="col-8 no-padding">
              <LoginPanel></LoginPanel>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
