import React, { Component } from 'react'
import './registration.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { API_URL } from '../loginPanel/config'
import { withTranslation } from 'react-i18next';
import history from '../../../../services/history'

class Registration extends Component {
  state = {
    user: {},
    providerName: ''
  }

  handleChange = (e) => {

    if (e.target) {
      let user = Object.assign({}, this.state.user);
      user.name = e.target.value;
      this.setState({ user: user });
    }
  }

  componentDidMount() {
    const { location } = this.props
    if (location.state) {
      this.setState({ user: location.state.user, providerName: location.state.providerName });
    }
  }

  addUser = (event) => {
    event.preventDefault();
    axios.post(`${API_URL}/api/registration/${this.state.providerName}`, {
      user: this.state.user
    }, { withCredentials: true })
      .then(res => {
        history.push('/')
      }).catch(err => {
        alert(`Error occured. ${err}`);
      });
  }

  render() {
    const { t } = this.props;
    return (
      <div className="d-flex justify-content-center align-items-center row" style={{ height: "100%" }}>
        <form>
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text"> <FontAwesomeIcon icon={faUser} /></span>
            </div>
            <input className="form-control" placeholder="Full name" type="text" value={this.state.user ? this.state.user.name : ""}
              onChange={(e) => { this.handleChange(e) }} />
          </div>
          <div className="form-group">
            <button type="submit" onClick={(event) => { this.addUser(event) }} className="btn btn-primary btn-block"> {t('Login.registration')}  </button>
          </div>
        </form>
      </div>
    )
  }
}

const TranslatedRegistration = withTranslation()(Registration)

export default TranslatedRegistration
