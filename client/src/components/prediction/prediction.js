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
            isLoading: true,
            user: {
                IsAuthenticated: false,
                isFirstLogin: false
            }
        }
    }

    componentDidMount() {
        const { user } = this.props;
        this.setState({ user });
        if (user.isAuthenticated) {
            this.getRecommendedPredictions(user.id);    
        }
        else {
            // get latest predictions
        }
    }

    getRecommendedPredictions = (userId) => {
        axios.get(`${API_URL}/api/getRecommendedPredictions`, { params: { userId: userId } })
            .then(res => {
                this.setState({ isLoading: false, recommendedPredictions: res.data });
            });
    }

    render() {

        // TODO : IsAuthenticated check. If not show only hot topics
        const { isLoading, recommendedPredictions, user } = this.state;
        
        return (
            <div>
                <div className="overlay"></div>
                <div className="row m-1 mt-1">
                    <div className="col-12">
                        <div className="row">
                        {user.isAuthenticated ? <h6 className="col-12 pl-2 font-weight-bold">Recommended For You</h6>
                            : <h6 className="col-12 pl-2 font-weight-bold">Latest Predictions</h6>
                        }
                        <hr />
                        {isLoading ? [...Array(20)].map(x => <PredictionCard key={x} predictionId={''} title={''} dueDate={''} />)
                            : recommendedPredictions.map(prediction=> <PredictionCard key={prediction.id} predictionId={prediction.id} title={prediction.name} dueDate={prediction.dueDate} />)
                        }
                        </div>
                    </div>
                </div>
            </div>
        )
        
    }
}

export default Prediction
