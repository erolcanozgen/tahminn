import React from 'react'
import ReactDOM from 'react-dom'
import './assets/styles/index.css'
import Login from './components/login/login'
import registerServiceWorker from './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import "./i18n/index"
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

registerServiceWorker()
