import React, { Component } from 'react'
import './login.css'
import Logo from './components/logo/logo'
import LoginPanel from './components/loginPanel/loginPanel'
import Registration from './components/registration/registration'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import trFlag from '../../assets/icons/flags/tr.png';
import enUsFlag from '../../assets/icons/flags/en-us.png';
import i18next from 'i18next';


class Login extends Component {
  state = {
    selectedLanguage: i18next.language
  }


  changeLanguage(language) {
    this.setState({ selectedLanguage: language }, () => {
      i18next.changeLanguage(language)
    });
  }

  render() {
    let classNameTrFlag, classNameEnUsFlag;
    classNameTrFlag = classNameEnUsFlag = "flag";

    if (this.state.selectedLanguage === "en") {
      classNameEnUsFlag += " selected-flag";
    }
    else {
      classNameTrFlag += " selected-flag";
    }


    return (
      <div className="container loginContainer">
        <div className="center-block h-100">
          <div className="row h-100">
            <div className="col-12 col-sm-4 no-padding" style={{ zIndex: 1 }}>
              <Logo></Logo>
            </div>
            <div className="col-12 col-sm-8 no-padding">
              <div className="mlt-content col-12">
                <div className="row float-right justify-content-center">
                  <div className="col-4">
                    <img src={trFlag} onClick={() => { this.changeLanguage("tr") }} className={classNameTrFlag} />
                  </div>
                  <div className="col-4">
                    <img src={enUsFlag} onClick={() => { this.changeLanguage("en") }} className={classNameEnUsFlag} />
                  </div>
                </div>
                <Switch>
                  <Route path="/login" component={LoginPanel} />
                  <Route path="/registration" component={Registration} />
                  <Route component={LoginPanel} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
