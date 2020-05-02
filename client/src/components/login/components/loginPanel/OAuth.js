import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { API_URL } from './config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Redirect } from "react-router-dom";
import { withTranslation } from 'react-i18next';
import i18next from 'i18next';

class OAuth extends Component {

    state = {
        user: {},
        isLoggedIn: false
    }


    componentDidMount() {
        const { socket, provider } = this.props

        socket.on(provider.name, user => {
            this.popup.close();
            this.setState({
                user: user,
                isLoggedIn: true
            });



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
        const { t } = this.props;
        if (this.state.isLoggedIn === true) {
            return <Redirect to={{ pathname: '/registration', state: { user: this.state.user } }} />
        }
        const { name } = this.state.user
        const { provider } = this.props

        const atSymbol = provider.name === 'twitter' ? '@' : ''
        const className = `btn ${provider.className} btn-block text-white`
        return (
            <div style={{ marginBottom: '10px' }}>
                <a className={className} onClick={this.startAuth}><FontAwesomeIcon icon={provider.icon} /> {t('OAuth.signin',
                    { providerName: `${provider.name.charAt(0).toUpperCase() + provider.name.substring(1)}` })}</a>
            </div>
        )
    }
}

OAuth.propTypes = {
    provider: PropTypes.object.isRequired,
    socket: PropTypes.object.isRequired
}

const OAuthComponent = withTranslation()(OAuth)

export default OAuthComponent;