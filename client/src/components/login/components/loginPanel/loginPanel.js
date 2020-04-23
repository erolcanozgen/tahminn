import React, { Component } from 'react'
import io from 'socket.io-client'
import OAuth from './OAuth'
import { API_URL } from './config'
import './loginPanel.css'
const socket = io(API_URL)
const providers = ['google', 'twitter']

class LoginPanel extends Component {
  state = {

  }
  render() {
    const buttons = (providers, socket) =>
      providers.map(provider =>
        <OAuth
          provider={provider}
          key={provider}
          socket={socket}
        />
      )

    return (
      <div className="d-flex flex-column align-items-center">
        <div className="d-flex justify-content-center align-items-center" style={{ height: "100%" }}>
          {
            buttons(providers, socket)
          }
        </div>
      </div>
    )
  }
}

export default LoginPanel
