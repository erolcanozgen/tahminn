import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { API_URL } from './config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Redirect } from "react-router-dom";



export default class OAuth extends Component {

    state = {
        user: {},
        isLoggedIn:false
    }


    componentDidMount() {
        const { socket, provider } = this.props

        socket.on(provider.name, user => {
            this.popup.close();
            this.setState({ user });
            this.setState({ isLoggedIn:true });
        })
    }

    openLoginPopup() {
        const { provider, socket } = this.props
        const width = 600, height = 600
        const left = (window.innerWidth / 2) - (width / 2)
        const top = (window.innerHeight / 2) - (height / 2)
        const url = `${API_URL}/${provider.name}?socketId=${socket.id}`

        return window.open(url, '',
            `toolbar=no, location=no, directories=no, status=no, menubar=no, 
      scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
      height=${height}, top=${top}, left=${left}`
        )
    }

    startAuth = () => {
        this.popup = this.openLoginPopup()
        
    }

    closeCard = () => {
        this.setState({ user: {} })
    }

    render() {
        if (this.state.isLoggedIn === true) {
            return <Redirect to={{pathname:'/registration',state: { user: this.state.user }}}  />
        }
        const { name, photo } = this.state.user
        const { provider} = this.props
        const atSymbol = provider.name === 'twitter' ? '@' : ''
        const className = `btn ${provider.className} btn-block text-white`
        return (
            <div style={{marginBottom:'10px'}}>
            {name
                ? <div className='card'>
                    <img style={{maxHeight:'350px'}} src={photo} alt={name} />
                    <FontAwesomeIcon
                        icon={faTimesCircle}
                        className='close'
                        onClick={this.closeCard}
                    />
                    <h4>{`${atSymbol}${name}`}</h4>
                </div>               
                : 
                <a className={className} onClick={this.startAuth}><FontAwesomeIcon icon={provider.icon} /> Sign in with <b style={{ textTransform: 'capitalize'}}>{provider.name}</b></a>
            }
            </div>
        )
    }
}

OAuth.propTypes = {
    provider: PropTypes.object.isRequired,
    socket: PropTypes.object.isRequired
}