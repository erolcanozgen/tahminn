import React, { Component } from 'react'
import './login.css'
import Logo from './components/logo/logo'
import LoginPanel from './components/loginPanel/loginPanel'
import Registration from './components/registration/registration'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import trFlag from '../../assets/icons/flags/tr.png';
import enUsFlag from '../../assets/icons/flags/en-us.png';


class Login extends Component {
  state = {
    selectedLanguage:"tr"
  }

 
  changeLanguage(language){
    this.setState({ selectedLanguage:language });
};

  render() {
    let classNameTrFlag ,classNameEnUsFlag;
    classNameTrFlag = classNameEnUsFlag =  "flag";
    
    if(this.state.selectedLanguage === "en-us"){
      classNameEnUsFlag += " selected-flag";
    }
    else
    {
      classNameTrFlag += " selected-flag";
    }

    debugger;
    return (
      <div className="container loginContainer">
        <div className="center-block">
        <div className="row">
            <div className="col-4 no-padding" style={{zIndex: 1}}>
              <Logo></Logo>
            </div>
            <div className="col-8 no-padding">
            <div className="mlt-content">
            <div className="row float-right">
              <div className="col-4">
                  <img src={trFlag} onClick={() => {this.changeLanguage("tr")}} className={classNameTrFlag}/>
              </div>
              <div className="col-4">
                  <img src={enUsFlag} onClick={() => {this.changeLanguage("en-us")}}  className={classNameEnUsFlag}/>   
              </div>        
              </div>
              <Router>
                <Route path="/login" component={LoginPanel} />
                <Route path="/registration" component={Registration}/>
            </Router>    
            </div>         
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
