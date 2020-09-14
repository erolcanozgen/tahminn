import { dom } from '@fortawesome/fontawesome-svg-core';
import React, { Component } from 'react'
import './predictionDetails.css'

class PredictionDetails extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { initialPos } = this.props;
        var styles = {
            position: 'absolute',
            left: initialPos.x,
            top: initialPos.y,
            width: initialPos.width,
            height: initialPos.height
        }
        return (
            <div className="prediction-detail expandedToMainPane" style={styles}>
                <div className="col-12 prediction-detail-title">
                    Çaykur Rizespor - Fenerbahçe
                </div>
            </div>
        )
    }
}

export default PredictionDetails