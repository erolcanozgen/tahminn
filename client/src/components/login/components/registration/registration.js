import React, { Component } from 'react'
import './registration.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { API_URL } from '../loginPanel/config'

class Registration extends Component {
  state = {
    user: {},
    providerName: ''
  }


  componentDidMount() {
    const { location } = this.props
    if (location.state) {
      this.setState({ user: location.state.user, providerName: location.state.providerName });
    }
  }

  addUser = () => {

    axios.post(`${API_URL}/api/registration/${this.state.providerName}`, {
      user: this.state.user
    })
      .then(res => {
        if (res.data) {
          alert('Welcome to Party !!!')
        }
        else {
          alert('Error occured.')
        }
      });
  }

  render() {
    debugger;
    return (
      <div className="d-flex justify-content-center align-items-center row" style={{ height: "100%" }}>
        <form>
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text"> <FontAwesomeIcon icon={faUser} /></span>
            </div>
            <input className="form-control" placeholder="Full name" type="text" value={this.state.user.name} />
          </div>
          <div className="form-group">
            <button type="submit" onClick={this.addUser()} className="btn btn-primary btn-block"> Create Account  </button>
          </div>
        </form>
      </div>
    )
  }
}

export default Registration
