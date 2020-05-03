import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { API_URL } from './config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withTranslation } from 'react-i18next';
import axios from 'axios';
import history from '../../../../services/history'

class OAuth extends Component {

    state = {
        user: null,
        providerName: ''
    }


    componentDidMount() {
        const { socket, provider } = this.props

        socket.on(provider.name, user => {
            this.popup.close();
            this.setState({
                user: user,
                providerName: provider.name
            });

            axios.post(`${API_URL}/api/login/${provider.name}`, {
                id: user.id,
            })
                .then(res => {
                    if (!res.data.user) {
                        history.push('/registration', {
                            user: this.state.user, providerName: this.state.providerName
                        })
                    }
                    else {
                        alert(`Welcome to party ${res.data.user.username}!!`);
                    }
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
        const { provider } = this.props
        const className = `btn ${provider.className} btn-block text-white`
        return (
            <div style={{ marginBottom: '10px' }}>
                <a className={className} onClick={this.startAuth}><FontAwesomeIcon icon={provider.icon} /> {t('Login.signin',
                    { providerName: `${provider.name.charAt(0).toUpperCase() + provider.name.substring(1)}` })}</a>
            </div>
        )
    }
}

OAuth.propTypes = {
    provider: PropTypes.object.isRequired,
    socket: PropTypes.object.isRequired
}

const TranslatedOAuth = withTranslation()(OAuth)

export default TranslatedOAuth;