import React, { Component } from 'react'
import io from 'socket.io-client'
import OAuth from './OAuth'
import { API_URL } from './config'
import './app.css'
const socket = io(API_URL)
const providers = ['google']

export default class App extends Component {

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
      <div className='wrapper'>
        <div className='container'>
          {buttons(providers, socket)
          }
        </div>
      </div>
    )
  }
}