import React, { Component } from 'react'
import './navbar.css'
import { faQuestion, faShareAlt, faTrophy, faSearch, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import history from '../../services/history'
import axios from 'axios';
import { API_URL } from '../login/components/loginPanel/config'
import site_icon from '../../assets/icons/navbar-brand.png'

class Navbar extends Component {

    logout = () => {
        axios.get(`${API_URL}/api/logout/`, { withCredentials: true })
            .then(res => {
                history.push('/login');
            });
    }

    render() {
        return (
            <div >
                <nav class="navbar navbar-expand navbar-dark bg-navbar top-colored p-0">
                    <div class="navbar-collapse collapse container" id="main-navbar">
                        <a class="navbar-brand d-none d-md-inline-block" href="/">
                            <img id="navbar-site-logo" className="center-block" width="167" height="32" src={site_icon} alt="navbar-site-logo" />
                        </a>
                        <ul class="navbar-nav w-100">
                            <li class="nav-item text-center">
                                <a href="#" class="nav-link" data-toggle="modal" data-target="#">
                                    <FontAwesomeIcon className="d-inline-block d-sm-none" icon={faQuestion} />
                                    <span class="d-block px-1">Prediction</span>
                                </a>
                            </li>
                            <li class="nav-item text-center">
                                <a href="#" class="nav-link" data-toggle="modal" data-target="#">
                                    <FontAwesomeIcon className="d-inline-block d-sm-none" icon={faShareAlt} />
                                    <span class="d-block px-1">Activity</span>
                                </a>
                            </li>
                            <li class="nav-item text-center">
                                <a href="#" class="nav-link" data-toggle="modal" data-target="#">
                                    <FontAwesomeIcon className="d-inline-block d-sm-none" icon={faTrophy} />
                                    <span class="d-block px-1">Leaderboard</span>
                                </a>
                            </li>
                            <li class="nav-item text-center d-block d-sm-none">
                                <a href="#" class="nav-link" data-toggle="modal" data-target="#">
                                    <FontAwesomeIcon className="d-inline-block d-sm-none" icon={faSearch} />
                                    <span class="d-block px-1">Search</span>
                                </a>
                            </li>
                        </ul>
                        <form class="ml-auto mr-3 my-auto d-none d-sm-inline">
                            <div class="input-group">
                                <input type="text" class="form-control border-right-0" placeholder="Search" />
                                <div class="input-group-append">
                                    <button class="btn btn-outline-primary border-left-0" type="button">GO</button>
                                </div>
                            </div>
                        </form>
                        <ul class="navbar-nav d-none d-sm-flex">
                            <li class="nav-item text-center">
                                <a href="#" class="nav-link" data-toggle="modal" data-target="#">
                                    <FontAwesomeIcon className="d-inline-block" icon={faUser} />
                                </a>
                            </li>
                            <li class="nav-item text-center">
                                <button type="submit" onClick={() => { this.logout() }} className="btn btn-block nav-link"><FontAwesomeIcon className="d-inline-block" icon={faSignOutAlt} /></button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar