import React, { Component } from 'react'
import './navbar.css'
import { faQuestion, faShareAlt, faTrophy, faSearch, faUser, faSignOutAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import history from '../../services/history'
import axios from 'axios';
import { API_URL } from '../login/components/loginPanel/config'
import site_icon from '../../assets/icons/navbar-brand.png'
import $ from 'jquery'

class NavigationBar extends Component {
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
        const { user } = this.props;
        this.setState({ user });
        $(document).ready(function() {
            $('li.active').removeClass('active');
            $('a[href="' + window.location.pathname + '"]').closest('li').addClass('active'); 
        });
    }

    login = () => {
        history.push('/login');
    }

    logout = () => {
        axios.get(`${API_URL}/api/logout/`, { withCredentials: true })
            .then(res => {
                history.push('/login');
            });
    }

    render() {
        let logoutButtonDisplay = this.state.user.isAuthenticated ? "flex" : "none";
        let loginButtonDisplay = !this.state.user.isAuthenticated ? "flex" : "none";
        return (
            <div>
                <nav className="navbar navbar-expand navbar-light bg-navbar top-colored p-0 font-weight-bold separated">
                    <div className="navbar-collapse collapse container" id="main-navbar">
                        <a className="navbar-brand d-none d-md-inline-block" href="/">
                            <img id="navbar-site-logo" className="center-block" width="167" height="32" src={site_icon} alt="navbar-site-logo" />
                        </a>
                        <ul className="navbar-nav w-100 w-sm-50">
                            <li className="nav-item text-center">
                                <a href="/prediction" className="nav-link external" data-target="/prediction">
                                    <FontAwesomeIcon className="d-inline-block d-sm-none" icon={faQuestion} />
                                    <span className="d-block px-1">Prediction</span>
                                </a>
                            </li>
                            <li className="nav-item text-center">
                                <a href="/activity" className="nav-link" data-target="/activity">
                                    <FontAwesomeIcon className="d-inline-block d-sm-none" icon={faShareAlt} />
                                    <span className="d-block px-1">Activity</span>
                                </a>
                            </li>
                            <li className="nav-item text-center">
                                <a href="/leaderboards" className="nav-link" data-target="/leaderboards">
                                    <FontAwesomeIcon className="d-inline-block d-sm-none" icon={faTrophy} />
                                    <span className="d-block px-1">Leaderboards</span>
                                </a>
                            </li>
                            <li className="nav-item text-center d-block d-sm-none">
                                <a href="#" className="nav-link" data-toggle="modal" data-target="#">
                                    <FontAwesomeIcon className="d-inline-block d-sm-none" icon={faSearch} />
                                    <span className="d-block px-1">Search</span>
                                </a>
                            </li>
                            <li className="nav-item text-center d-block d-sm-none">
                                <a href="/profile/userid" className="nav-link" data-target="/profile/userid">
                                    <FontAwesomeIcon className="d-inline-block d-sm-none" icon={faUser} />
                                    <span className="d-block px-1">Profile</span>
                                </a>
                            </li>
                        </ul>
                        <form className="ml-auto mr-3 my-auto d-none d-sm-inline">
                            <div className="input-group">
                                <input type="text" className="form-control border-right-0" placeholder="Search" />
                                <div className="input-group-append">
                                    <button className="btn btn-navbar-search border-left-0" type="button">
                                        <FontAwesomeIcon className="d-inline-block" icon={faSearch} />
                                    </button>
                                </div>
                            </div>
                        </form>
                        <ul className="navbar-nav d-none d-sm-flex">
                            <li style={{ display: logoutButtonDisplay }} className="nav-item text-center">
                                <a href="#" className="nav-link" data-toggle="modal" data-target="#">
                                    <FontAwesomeIcon className="d-inline-block" icon={faUser} />
                                </a>
                            </li>
                            <li className="nav-item text-center">
                                <button type="submit" style={{ display: loginButtonDisplay }} onClick={() => { this.login() }} className="btn btn-block nav-link align-items-center"><FontAwesomeIcon className="d-inline-block mr-2" icon={faSignInAlt} /> Login</button>
                                <button type="submit" style={{ display: logoutButtonDisplay }} onClick={() => { this.logout() }} className="btn btn-block nav-link"><FontAwesomeIcon className="d-inline-block" icon={faSignOutAlt} /></button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavigationBar