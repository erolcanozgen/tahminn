import React, { Component } from 'react'
import './prediction.css'
import PredictionCard from './predictionCard/predictionCard'
import { API_URL } from '../login/components/loginPanel/config'
import axios from 'axios'
import { withTranslation } from 'react-i18next';

class Prediction extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recommendedPredictions: [],
            latestPredictions: [],
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
            this.getLatestPredictions();
        }
    }

    getRecommendedPredictions = (userId) => {
        axios.get(`${API_URL}/api/getRecommendedPredictions`, { params: { userId: userId } })
            .then(res => {
                if(res.data.length === 0){
                    this.getLatestPredictions();
                }
                else{
                    this.setState({ isLoading: false, recommendedPredictions: res.data });
                }
            });
    }

    getLatestPredictions = () => {
        axios.get(`${API_URL}/api/getLatestPredictions`)
            .then(res => {
                this.setState({ isLoading: false, latestPredictions: res.data });
            });
    }

    render() {
        const { isLoading, recommendedPredictions, latestPredictions, user } = this.state;
        const { t } = this.props;
        
        return (
            <div>
                <div className="overlay"></div>
                <div className="row m-1 mt-1">
                    <div className="col-12">
                        {user.isAuthenticated === false || (isLoading === false && recommendedPredictions.length) === 0  ? 
                        
                        // If the user is a guest or there is no predictions for the current user's interests
                        <div className="row">
                            {user.isAuthenticated === true && isLoading === false ? <label className="recommended-prediction-warning">{t('Prediction.noRecommendedPredictionMessage')}</label> : ''}
                            <h6 className="col-12 pl-2 font-weight-bold">{t('Prediction.latestPredictions')}</h6>
                            <hr />
                            {isLoading ? [...Array(20)].map(x => <PredictionCard key={x} predictionId={''} title={''} dueDate={''} />)
                            : latestPredictions.map(prediction=> <PredictionCard key={prediction.id} predictionId={prediction.id} title={prediction.name} dueDate={prediction.dueDate} />)
                            }
                        </div>
                        
                        : 
                        <div className="row">
                            <h6 className="col-12 pl-2 font-weight-bold">{t('Prediction.recommendedPredictions')}</h6>
                            <hr />
                            {isLoading ? [...Array(20)].map(x => <PredictionCard key={x} predictionId={''} title={''} dueDate={''} />)
                            : recommendedPredictions.map(prediction=> <PredictionCard key={prediction.id} predictionId={prediction.id} title={prediction.name} dueDate={prediction.dueDate} />)
                            }
                        </div>
                        }
                    </div>
                </div>
            </div>
        )
        
    }
}
const TranslatedPredictionPage = withTranslation()(Prediction)

export default TranslatedPredictionPage
