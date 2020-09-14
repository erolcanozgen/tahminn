import React, { Component } from 'react'
import './prediction.css'
import PredictionCard from './predictionCard/predictionCard'
import $ from 'jquery'

class Prediction extends Component {



    render() {

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
                <div className="row m-1 mt-4 mt-sm-1 ">
                    <div className="row">
                        <h6 className="col-12 pl-2 font-weight-bold">Hot Topics</h6>
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
                    </div>
                </div>
                <div className="row m-1 mt-4 mt-sm-1 ">
                    <div className="row">
                        <h6 className="col-12 pl-2 font-weight-bold">Hot Topics</h6>
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
