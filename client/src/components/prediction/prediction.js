import React, { Component } from 'react'
import './prediction.css'
import PredictionCard from './predictionCard/predictionCard'
import { API_URL } from '../login/components/loginPanel/config'
import axios from 'axios'
import $ from 'jquery'

class Prediction extends Component {

    getRecommendedPredictions(userId) {
        axios.get(`${API_URL}/api/getRecommendedPredictions`, { params: { userId: userId } })
            .then(res => {
                console.log(res);
            });
    }

    render() {

        // TODO : IsAuthenticated check. If not show only hot topics
        const { user } = this.props;
        this.getRecommendedPredictions(user.id);
        return (
            <div>
                <div className="overlay"></div>
                <div className="row m-1 mt-1">
                    <div className="row">
                        <h6 className="col-12 pl-2 font-weight-bold">Recommended For You</h6><hr/>
                        <div className="col-12 col-sm-6 p-1">
                            <PredictionCard />
                        </div>
                        <div className="col-12 col-sm-6 p-1">
                            <PredictionCard />
                        </div>
                        <div className="col-12 col-sm-6 p-1">
                            <PredictionCard />
                        </div>
                        <div className="col-12 col-sm-6 p-1">
                            <PredictionCard />
                        </div>
                        <div className="col-12 col-sm-6 p-1">
                            <PredictionCard />
                        </div>
                        <div className="col-12 col-sm-6 p-1">
                            <PredictionCard />
                        </div>
                        <div className="col-12 col-sm-6 p-1">
                            <PredictionCard />                
                        </div>
                        <div className="col-12 col-sm-6 p-1">
                            <PredictionCard />
                        </div>
                        <div className="col-12 col-sm-6 p-1 d-none d-sm-block">
                            <PredictionCard />
                        </div>
                        <div className="col-12 col-sm-6 p-1 d-none d-sm-block">
                            <PredictionCard />
                        </div>
                        <div className="col-12 col-sm-6 p-1 d-none d-sm-block">
                            <PredictionCard />
                        </div>
                        <div className="col-12 col-sm-6 p-1 d-none d-sm-block">
                            <PredictionCard />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

$('.prediction-card').on('click', function () {
    console.log("denem");
})

export default Prediction
