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
import blob2ImageUrl from '../../../utils/blob2Image';

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
        if($('.btn-save').hasClass('disabled')){
            return;
        }
        const {predictionDetails} = this.state;
        var selectedOptionId = $('.option-checked').attr("optionid");
        axios.get(`${API_URL}/api/savePrediction`, { 
            params: {
                optionId: selectedOptionId,
                predictionId: predictionDetails.id
            },
            withCredentials: true
        }).then(res => {
            if(res.data.status == 'unauthorized'){
                history.push('/login');
            }
            $('.btn-save').addClass('btn-save-saved');
            $('.btn-save').addClass('disabled');
            this.getPredictionDetails(predictionDetails.id);
        });
    }
    
    optionCheck = (e) => {
        $('.option-check').removeClass('option-checked');
        $('.btn-save').removeClass('disabled');
        $(e.target).toggleClass('option-checked');
    }

    getOptionImageSources(options){
        var sourceList = [];
        options.forEach(option => {
            if(option.icon){
                sourceList.push(blob2ImageUrl(option.icon.data));
            }
            else{
                sourceList.push(null);
            }
        });
        return sourceList;
    }

    renderByPredictionType(predictionDetails){
        var predictionImgSources = this.getOptionImageSources(predictionDetails.prediction_options);
        switch(predictionDetails.predictionTypeId) {
            case 1:
                return(
                    <div className="row w-100">
                        <div className="col-6 border-right text-center">
                            {predictionImgSources[0] ? <img className="prediction-img" src={predictionImgSources[0]}/> : ''}
                            <div>{predictionDetails.prediction_options[0].name}</div>
                            <div optionid={predictionDetails.prediction_options[0].id} className={predictionDetails.selectedOptions && predictionDetails.selectedOptions.length != 0 && predictionDetails.selectedOptions[0].optionId == predictionDetails.prediction_options[0].id ? "option-check option-checked mx-auto" : "option-check mx-auto"} onClick={this.optionCheck}></div>
                            {predictionDetails.prediction_options[0].rate}%
                        </div>
                        <div className="col-6 border-left text-center">
                            {predictionImgSources[1] ? <img className="prediction-img" src={predictionImgSources[1]}/> : ''}
                            {predictionDetails.prediction_options[1].name}
                            <div optionid={predictionDetails.prediction_options[1].id} className={predictionDetails.selectedOptions && predictionDetails.selectedOptions.length != 0 && predictionDetails.selectedOptions[0].optionId == predictionDetails.prediction_options[1].id ? "option-check option-checked mx-auto" : "option-check mx-auto"} onClick={this.optionCheck}></div>
                            {predictionDetails.prediction_options[1].rate}%
                        </div>
                        <button onClick={this.savePrediction} className="btn btn-save disabled mr-auto ml-auto">Tahmini tamamla</button>
                    </div>
                );
            case 2:
                return(
                    <div className="col-12 p-3">
                        <table className="table">
                            <thead>
                                <td className="p-1 align-middle"></td>
                                <td className="p-1 align-middle"></td>
                                <td className="p-1 align-middle">Option</td>
                                <td className="p-1 align-middle text-right">Prediction Rate</td>
                            </thead>
                            <tbody>
                            {predictionDetails.prediction_options.map((option, index) => 
                                <tr key={option.id} optionid={option.id}>
                                    <td className="p-0 align-middle"><div optionid={option.id} className={predictionDetails.selectedOptions && predictionDetails.selectedOptions.length != 0 && predictionDetails.selectedOptions[0].optionId == option.id ? "option-check option-checked" : "option-check"} onClick={this.optionCheck}></div></td>
                                    <td className="p-1 align-middle">{predictionImgSources[index] ? <img className="prediction-img-small d-none d-sm-block" src={predictionImgSources[index]}/> : ''}</td>
                                    <td className="p-1 align-middle">{option.name}</td>
                                    <td className="p-1 align-middle text-right">{option.rate}%</td>
                                </tr>    
                            )}
                            </tbody>
                        </table>
                        <button onClick={this.savePrediction} className="btn btn-save disabled">Tahmini tamamla</button>
                    </div>
                );
        }
    }

    render() {

        const { t } = this.props;
        const { predictionDetails } = this.state;
        var blob = '';
        var imgurl = '';
        
        return (
            jQuery.isEmptyObject(predictionDetails) ? <div></div>
                :
            <div className="prediction-detail">
                <div className="col-12 prediction-detail-title">
                    <a className="pr-3" data-toggle="modal" onClick={history.goBack}>
                        <FontAwesomeIcon className="d-inline-block" icon={faArrowLeft} />
                    </a>
                    {predictionDetails.name[0].text}
                </div>
                <div className="col-12 prediction-due-info">
                    {t('Prediction.dueDateText')} : {predictionDetails.dueDate.replace('T', ' ').replace('.000Z', '')}
                </div>
                <br/>
                <div className="col-12 prediction-detail-content">
                    <div className="row">
                        <div className="col-12 col-sm-6 pt-2">
                            {t('Prediction.resultDateText')}<br/>{predictionDetails.resultDate.replace('T', ' ').replace('.000Z', '')}
                        </div>
                        <div className="col-12 col-sm-6 pt-2">
                            {t('Prediction.reward', { points: predictionDetails.score})}
                        </div>
                        {this.renderByPredictionType(predictionDetails)}
                    </div>
                </div>
                
            </div>
        )
    }
}

const TranslatedPredictionDetails = withTranslation()(PredictionDetails)

export default withRouter(TranslatedPredictionDetails)