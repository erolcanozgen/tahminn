import React, { Component } from 'react'
import io from 'socket.io-client'
import OAuth from './OAuth'
import { API_URL } from './config'
import './loginPanel.css'
import { faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
import siteNameImg from '../../../../assets/images/site-name.png';

const socket = io(API_URL)
const providers = [
  {
    name: 'google',
    icon: faGoogle,
    className: 'btn-danger'
  },
  {
    name: 'twitter',
    icon: faTwitter,
    className: 'btn-info'
  }
]

class LoginPanel extends Component {
  state = {

  }

  render() {
    const buttons = (providers, socket) =>
      providers.map(provider =>
        <OAuth
          provider={provider}
          key={provider.name}
          socket={socket}
        />
      )

    return (
      <div id="login-panel" className="d-flex justify-content-center align-items-center w-100">
        <div className="text-center site-name w-50">
          <img id="site-name-img" className="img-responsive" src={siteNameImg} alt="site-name-image" />
        </div>
        <div className="text-center social-btn">
          {
            buttons(providers, socket)
          }
        </div>
      </div>
    )
  }
}

export default LoginPanel
