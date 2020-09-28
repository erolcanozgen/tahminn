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

    openPredictionDetail = (predictionID) => {
        $('#main-pane .overlay').addClass('overlay-faded');
        setTimeout(() => {
            history.push({ pathname: "/prediction/" + predictionID, state: { initialPos: this.calculateRelativePos() } });
        }, 50);
    }

    render() {
        const { title, predictionId, dueDate } = this.props;
        return (
            <div className="col-12 col-sm-6 p-1">
                <div className="col-12 prediction-card" onClick={() => this.openPredictionDetail(predictionId)}>
                    {title ? <div className="prediction-card-title" >{title}</div> : <div className="prediction-card-title-placeholder" ></div>}
                    {dueDate ? <div className="prediction-card-subhead" >Expires on {dueDate}</div> : <div className="prediction-card-subhead-placeholder"></div>}
                </div>
            </div>
        )
    }
}

export default PredictionCard