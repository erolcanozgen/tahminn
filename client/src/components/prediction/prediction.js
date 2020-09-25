import React, { Component } from 'react'
import './prediction.css'
import PredictionCard from './predictionCard/predictionCard'
import { API_URL } from '../login/components/loginPanel/config'
import axios from 'axios'
import $ from 'jquery'

class Prediction extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recommendedPredictions: [],
            isLoading: true
        }
    }

    componentDidMount() {
        const { user } = this.props;
        this.getRecommendedPredictions(user.id);
    }

    getRecommendedPredictions = (userId) => {
        axios.get(`${API_URL}/api/getRecommendedPredictions`, { params: { userId: userId } })
            .then(res => {
                this.setState({ isLoading: false, recommendedPredictions: res.data });
            });
    }

    render() {

        // TODO : IsAuthenticated check. If not show only hot topics
        const { isLoading, recommendedPredictions } = this.state;
        if (isLoading) {
            return (<div></div>)
        }
        else {
            return (
                <div>
                <div className="overlay"></div>
                <div className="row m-1 mt-1">
                    <div className="row">
                        <h6 className="col-12 pl-2 font-weight-bold">Recommended For You</h6><hr/>
                        {recommendedPredictions.map(prediction=> <PredictionCard key={prediction.id} predictionId={prediction.id} title={prediction.name} dueDate={prediction.dueDate} />)}
                    </div>
                </div>
            </div>
            )
        }
    }
}

$('.prediction-card').on('click', function () {
    console.log("denem");
})

export default Prediction
