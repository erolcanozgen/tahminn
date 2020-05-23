import React, { Component } from 'react'
import history from '../../services/history'
import axios from 'axios';
import { API_URL } from '../login/components/loginPanel/config'

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                isAuthenticated: false,
                isFirstLogin: false
            }
        }
    }

    componentDidMount() {
        const { user } = this.props
        this.setState({ user })
    }

    login = () => {
        history.push('/login');
    }

    logout = () => {
        axios.get(`${API_URL}/api/logout/`, { withCredentials: true })
            .then(res => {
                this.setState({
                    user: {
                        isAuthenticated: false,
                        isFirstLogin: false
                    }
                })

            });
    }

    render() {
        let logoutButtonDisplay = this.state.user.isAuthenticated ? "block" : "none";
        let loginButtonDisplay = !this.state.user.isAuthenticated ? "block" : "none";
        return (
            <div >
                DASHBOARD
                <button type="submit" style={{ display: loginButtonDisplay }} onClick={() => { this.login() }} className="btn btn-primary btn-block"> Login  </button>
                <button type="submit" style={{ display: logoutButtonDisplay }} onClick={() => { this.logout() }} className="btn btn-primary btn-block"> Logout  </button>
            </div>
        )
    }
}

export default Dashboard
