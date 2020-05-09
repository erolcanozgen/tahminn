import React, { Component } from 'react'
import "./interestSelection.css"
import mountains from './w3images/mountain.jpg';

class InterestSelection extends Component {
    state = {

    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="column nature">
                        <div className="content">
                            <img src={mountains} alt="Mountains" style={{ width: "100%" }} />
                            <h4>Mountains</h4>
                            <p>Lorem ipsum dolor..</p>
                        </div>
                    </div>
                    <div className="column nature">
                        <div className="content">
                            <img src={mountains} alt="Mountains" style={{ width: "100%" }} />
                            <h4>Lights</h4>
                            <p>Lorem ipsum dolor..</p>
                        </div>
                    </div>
                    <div className="column nature">
                        <div className="content">
                            <img src={mountains} alt="Mountains" style={{ width: "100%" }} />
                            <h4>Forest</h4>
                            <p>Lorem ipsum dolor..</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default InterestSelection;