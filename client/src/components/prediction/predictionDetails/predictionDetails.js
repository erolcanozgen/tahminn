import React, { Component } from 'react'
import './predictionDetails.css'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../../login/components/loginPanel/config'
import jQuery from 'jquery'
import $ from 'jquery'
import history from '../../../services/history'
import { withTranslation } from 'react-i18next';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        axios.get(`${API_URL}/api/getPredictionDetails`, { params: { predictionId: predictionId }, withCredentials: true })
            .then(res => {
                this.setState({ isLoading: false, predictionDetails: res.data });
            });
    }

    savePrediction = () => {
        const {predictionDetails} = this.state;
        var selectedOptionRow = $('tr').has(".option-checked");
        axios.get(`${API_URL}/api/savePrediction`, { 
            params: {
                optionId: selectedOptionRow.attr("optionId"),
                predictionId: predictionDetails.id
            },
            withCredentials: true
        }).then(res => {
            console.log("saved");
            this.setState({ isLoading: false });
        });
    }
    
    optionCheck = (e) => {
        $('.option-check').removeClass('option-checked')
        $(e.target).toggleClass('option-checked');
    }

    render() {

        const { initialPos, t } = this.props;
        const { predictionDetails } = this.state;
        var styles = initialPos ? {
            position: 'absolute',
            left: initialPos.x,
            top: initialPos.y,
            width: initialPos.width,
            height: initialPos.height
        } : null;

        return (
            jQuery.isEmptyObject(predictionDetails) ? <div></div>
                :
            <div className="prediction-detail expandedToMainPane" style={styles}>
                <div className="col-12 prediction-detail-title">
                    <a className="pr-3" data-toggle="modal" onClick={history.goBack}>
                        <FontAwesomeIcon className="d-inline-block" icon={faArrowLeft} />
                    </a>
                    {predictionDetails.name[0].text}
                </div>
                <div className="col-12 prediction-due-info">
                    {t('Prediction.dueDateText')} : {predictionDetails.dueDate}
                </div>
                <br/>
                <div className="col-12 prediction-detail-content pl-4">
                    <div className="row">
                        <div className="col-12 col-sm-6 pt-2">
                            {t('Prediction.resultDateText')}<br/>{predictionDetails.resultDate}
                        </div>
                        <div className="col-12 col-sm-6 pt-2">
                            {t('Prediction.reward', { points: predictionDetails.score})}
                        </div>
                        
                        <div className="col-12 p-3">
                            <table className="table table-bordered">
                                <tbody>
                                {predictionDetails.prediction_options.map(option => 
                                    <tr key={option.id} optionId={option.id}>
                                        <td>{option.name}</td>
                                        <td>25%</td>
                                        <td className="p-0"><div className={predictionDetails.selectedOption && predictionDetails.selectedOption.length != 0 && predictionDetails.selectedOption[0].optionId == option.id ? "option-check option-checked" : "option-check"} onClick={this.optionCheck}></div></td>
                                    </tr>    
                                )}
                                </tbody>
                            </table>
                            <button onClick={this.savePrediction}>Tahmini tamamla</button>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

const TranslatedPredictionDetails = withTranslation()(PredictionDetails)

export default withRouter(TranslatedPredictionDetails)