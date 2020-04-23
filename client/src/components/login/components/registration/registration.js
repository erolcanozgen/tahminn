import React, { Component } from 'react'
import './registration.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

class Registration extends Component {
  state = {
    user:{}
  }


  componentDidMount() {
    const { location } = this.props
    this.setState({ user:location.state.user });
}

  render() {
    return (
        <div className="mlt-content">
        <div className="d-flex justify-content-center align-items-center row" style={{ height: "100%" }}> 
        <form>
	        <div className="form-group input-group">
		        <div className="input-group-prepend">
		           <span className="input-group-text"> <FontAwesomeIcon icon={faUser} /></span>
		        </div>
               <input name="" className="form-control" placeholder="Full name" type="text" value={this.state.user.name}/>
           </div> 
           <div class="form-group">
              <button type="submit" class="btn btn-primary btn-block"> Create Account  </button>
           </div>
        </form>

        </div>
      </div>
    )
  }
}

export default Registration
