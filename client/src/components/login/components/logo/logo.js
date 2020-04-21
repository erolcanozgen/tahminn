import React, { Component } from 'react'
import './logo.css'
import step1 from '../../../../assets/images/step1.png';

class Logo extends Component {
  state = {

  }
  render() {
    return (
      <div className="mlt-carousel">
            <div className="item">
                <img className="img-responsive center-block" src={step1} alt="step1"/>
                <div className="item-content">
                      <h3>Lorem ipsum dolor sit amet</h3>
                      <p>Consectetur adipiscing elit</p>
                      <p>Phasellus orci dolor</p>
                      <p>dapibus suscipit quam</p>
                </div>
            </div>
      </div>
    )
  }
}

export default Logo
