import React, { Component } from 'react'
import history from '../../../services/history'
import ReactDOM from 'react-dom'
import $ from 'jquery'

class PredictionCard extends Component {

    calculateRelativePos = () => {
        let pos = ReactDOM.findDOMNode(this).getBoundingClientRect();
        let parentPos = $('#main-pane')[0].getBoundingClientRect();
        pos.x = pos.x - parentPos.x;
        pos.y = pos.y - parentPos.y;
        return pos;
    }

    openPredictionDetail = () => {
        $('#main-pane .overlay').addClass('overlay-faded');
        setTimeout(() => {
            history.push({ pathname: "/prediction/prediction-details/predictionId", state: { initialPos: this.calculateRelativePos() } });
        }, 50);
    }

    render() {
        return (
            <div className="col-12 prediction-card" onClick={this.openPredictionDetail}>
                <div className="prediction-card-title" >Çaykur Rizespor - Fenerbahçe</div>
                <div className="prediction-card-subhead" >Expires on 11.09.2020</div>
            </div>
        )
    }
}

export default PredictionCard