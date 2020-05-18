import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { API_URL } from './config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withTranslation } from 'react-i18next';
import history from '../../../../services/history'

class OAuth extends Component {

    componentDidMount() {
        const { socket, provider } = this.props

        socket.on(provider.name, user => {
            if (this.popup) {
                this.popup.close();
            }

            if (user.IsFirstLogin) {
                history.push('/registration', {
                    user: user, providerName: provider.name
                })
            }
            else {
                history.push('/')

            }
        })
    }

    openLoginPopup() {
        const { provider, socket } = this.props
        const width = 600, height = 600
        const left = (window.innerWidth / 2) - (width / 2)
        const top = (window.innerHeight / 2) - (height / 2)
        const url = `${API_URL}/api/login/oauth/${provider.name}?socketId=${socket.id}`

        return window.open(url, '',
            `toolbar=no, location=no, directories=no, status=no, menubar=no, 
      scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
      height=${height}, top=${top}, left=${left}`
        )
    }

    startAuth = () => {
        this.popup = this.openLoginPopup()
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