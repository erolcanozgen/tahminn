import React, { Component } from 'react'
import history from '../../services/history'
import axios from 'axios';
import { API_URL } from '../login/components/loginPanel/config'

class Dashboard extends Component {

    logout = () => {
        axios.get(`${API_URL}/api/logout/`, { withCredentials: true })
            .then(res => {
                history.push('/login');
            });
    }

    render() {
        return (
            <div >
                DASHBOARD
                <button type="submit" onClick={() => { this.logout() }} className="btn btn-primary btn-block"> Logout  </button>
            </div>
        )
    }
}

export default Dashboard
