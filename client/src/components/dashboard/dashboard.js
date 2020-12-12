import React, { Component } from 'react'
import './dashboard.css'

class Dashboard extends Component {

    render() {

        return (
                    <div>
                        <div className="row m-1 mt-1">
                            <div className="row">
                                <h6 className="col-12 pl-2 font-weight-bold">Recommended For You</h6><hr/>
                                <div className="col-6 col-sm-3 p-1">
                                    <div className="col-12 bg-light prediction-tile sm-square-tile">
                                        Recommended Prediction
                                    </div>                
                                </div>
                                <div className="col-6 col-sm-3 p-1">
                                    <div className="col-12 bg-light prediction-tile sm-square-tile">
                                        Recommended Prediction
                                    </div>
                                </div>
                                <div className="col-6 col-sm-3 p-1">
                                    <div className="col-12 bg-light prediction-tile sm-square-tile">
                                        Recommended Prediction
                                    </div>
                                </div>
                                <div className="col-6 col-sm-3 p-1">
                                    <div className="col-12 bg-light prediction-tile sm-square-tile">
                                        Recommended Prediction
                                    </div>
                                </div>
                                <div className="col-6 col-sm-3 p-1">
                                    <div className="col-12 bg-light prediction-tile">
                                        Recommended Prediction
                                    </div>
                                </div>
                                <div className="col-6 col-sm-3 p-1">
                                    <div className="col-12 bg-light prediction-tile">
                                        Recommended Prediction
                                    </div>
                                </div>
                                <div className="col-6 col-sm-3 p-1">
                                    <div className="col-12 bg-light prediction-tile">
                                        Recommended Prediction
                                    </div>                
                                </div>
                                <div className="col-6 col-sm-3 p-1">
                                    <div className="col-12 bg-light prediction-tile">
                                        Recommended Prediction
                                    </div>
                                </div>
                                <div className="col-6 col-sm-3 p-1 d-none d-sm-block">
                                    <div className="col-12 bg-light prediction-tile">
                                        Recommended Prediction
                                    </div>
                                </div>
                                <div className="col-6 col-sm-3 p-1 d-none d-sm-block">
                                    <div className="col-12 bg-light prediction-tile">
                                        Recommended Prediction
                                    </div>
                                </div>
                                <div className="col-6 col-sm-3 p-1 d-none d-sm-block">
                                    <div className="col-12 bg-light prediction-tile">
                                        Recommended Prediction
                                    </div>
                                </div>
                                <div className="col-6 col-sm-3 p-1 d-none d-sm-block">
                                    <div className="col-12 bg-light prediction-tile">
                                        Recommended Prediction
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row m-1 mt-4 mt-sm-1 ">
                            <div className="row">
                                <h6 className="col-12 pl-2 font-weight-bold">Hot Topics</h6>
                                <div className="col-6 p-1">
                                    <div className="col-12 bg-light prediction-tile tile-big">
                                        Prediction from Hot Topic
                                    </div>                
                                </div>
                                <div className="col-6 p-1">
                                    <div className="col-12 bg-light prediction-tile tile-big">
                                        Prediction from Hot Topic
                                    </div>
                                </div>
                                <div className="col-6 col-sm-3 p-1">
                                    <div className="col-12 bg-light prediction-tile">
                                        Prediction from Hot Topic
                                    </div>
                                </div>
                                <div className="col-6 col-sm-3 p-1">
                                    <div className="col-12 bg-light prediction-tile">
                                        Prediction from Hot Topic
                                    </div>
                                </div>
                                <div className="col-6 col-sm-3 p-1 d-none d-sm-block">
                                    <div className="col-12 bg-light prediction-tile">
                                        Prediction from Hot Topic
                                    </div>                
                                </div>
                                <div className="col-6 col-sm-3 p-1 d-none d-sm-block">
                                    <div className="col-12 bg-light prediction-tile">
                                        Prediction from Hot Topic
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row m-1 mt-4 mt-sm-1 ">
                            <div className="row">
                                <h6 className="col-12 pl-2 font-weight-bold">Leaderboards</h6>
                            </div>
                        </div>
                    </div>
        )
    }
}

export default Dashboard
