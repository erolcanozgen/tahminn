import React from 'react'
import ReactDOM from 'react-dom'
import './assets/styles/index.css'
import Login from './components/login/login'
import registerServiceWorker from './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Redirect  } from 'react-router-dom';


ReactDOM.render((
  <Router>
    <Redirect from="/" to="login" />
    <Route path="/login" component={Login}>
    </Route>
  </Router>
), document.getElementById('root'))

registerServiceWorker()
