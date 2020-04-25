import React, { Component } from 'react'
import io from 'socket.io-client'
import OAuth from './OAuth'
import { API_URL } from './config'
import './loginPanel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTwitter , faGoogle } from '@fortawesome/free-brands-svg-icons';
const socket = io(API_URL)
const providers = [
  {
   name:'google',
   icon: faGoogle,
   className: 'btn-danger'
  },
  {
    name:'twitter',
    icon:faTwitter,
    className:'btn-info'
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
      <div className="mlt-content">
        <div className="d-flex justify-content-center align-items-center" style={{ height: "100%" }}>
          <div className="text-center social-btn">
            { 
              buttons(providers, socket)
            }
        </div>
        </div>
      </div>
    )
  }
}

export default LoginPanel
