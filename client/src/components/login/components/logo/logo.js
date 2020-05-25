import React, { Component } from 'react'
import './logo.css'
import loginLogo from '../../../../assets/images/login_logo.png';

class Logo extends Component {
  state = {

  }
  render() {
    return (
      <div className="mlt-carousel">
            <div className="item">
                <img id="login-logo" className="img-responsive center-block" src={loginLogo} alt="loginLogo"/>
                <div className="item-content d-none d-sm-block">
                      <h3>Lorem ipsum dolor sit amet</h3>
                      <p>Consectetur adipiscing elit</p>
                      <p>Phasellus orci dolor</p>
                      <p>dapibus suscipit quam</p>
                </div>
            </div>
      </div>
    )
  }
}

export default Logo
