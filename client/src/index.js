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

ReactDOM.render(<Login />, document.getElementById('root'))
registerServiceWorker()