import React from 'react'
import ReactDOM from 'react-dom'
import './assets/styles/index.css'
import Login from './components/login/login'
import Home from './components/home/home'
import registerServiceWorker from './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route } from 'react-router-dom';


ReactDOM.render((
    <Router>
        <Route path="/" component={Login} />
    </Router>
), document.getElementById('root'))
registerServiceWorker()
