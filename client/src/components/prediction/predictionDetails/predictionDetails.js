import React, { Component } from 'react'
import './predictionDetails.css'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../../login/components/loginPanel/config'
import jQuery from 'jquery'

class PredictionDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            predictionDetails: {},
            isLoading: true,
            user: {
                IsAuthenticated: false,
                isFirstLogin: false
            }
        }
    }

    componentDidMount() {
        const { user } = this.props;
        const predictionId = this.props.match.params.predictionId;
        this.setState({ user });
        this.getPredictionDetails(predictionId);
    }

    getPredictionDetails = (predictionId) => {
        axios.get(`${API_URL}/api/getPredictionDetails`, { params: { predictionId: predictionId } })
            .then(res => {
                this.setState({ isLoading: false, predictionDetails: res.data });
            });
    }

    render() {

        const { initialPos } = this.props;
        const { predictionDetails } = this.state;
        var styles = {
            position: 'absolute',
            left: initialPos.x,
            top: initialPos.y,
            width: initialPos.width,
            height: initialPos.height
        }
        return (
            jQuery.isEmptyObject(predictionDetails) ? <div></div>
                :
            <div className="prediction-detail expandedToMainPane" style={styles}>
                <div className="col-12 prediction-detail-title">
                    {predictionDetails.name[0].text}
                </div>
                <div>Due date: {predictionDetails.dueDate}</div>
                <div>Result date: {predictionDetails.resultDate}</div>
                <div>Score: {predictionDetails.score}</div>
                <div>Result: {predictionDetails.result}</div>
            </div>
        )
    }
}

export default withRouter(PredictionDetails)