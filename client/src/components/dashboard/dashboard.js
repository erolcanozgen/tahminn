import React, { Component } from 'react'
import './dashboard.css'

class Dashboard extends Component {

    render() {

        return (
                    <div className="row">
                        <div className="col-12 col-md-9 mt-5 mt-sm-0 pt-5 pt-sm-0">
                            <div className="row m-1 mt-4 mt-sm-1">
                                <div className="row">
                                    <h6 className="col-12 pl-2 d-none d-sm-block font-weight-bold">Recommended For You</h6><hr/>
                                    <div className="col-6 col-sm-4 col-md-3 p-1">
                                        <div className="col-12 bg-light prediction-tile square-tile">
                                            Recommended Prediction
                                        </div>                
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3 p-1">
                                        <div className="col-12 bg-light prediction-tile square-tile">
                                            Recommended Prediction
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3 p-1">
                                        <div className="col-12 bg-light prediction-tile sm-square-tile">
                                            Recommended Prediction
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3 p-1">
                                        <div className="col-12 bg-light prediction-tile md-square-tile">
                                            Recommended Prediction
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3 p-1">
                                        <div className="col-12 bg-light prediction-tile">
                                            Recommended Prediction
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3 p-1">
                                        <div className="col-12 bg-light prediction-tile">
                                            Recommended Prediction
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3 p-1">
                                        <div className="col-12 bg-light prediction-tile">
                                            Recommended Prediction
                                        </div>                
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3 p-1">
                                        <div className="col-12 bg-light prediction-tile">
                                            Recommended Prediction
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3 p-1">
                                        <div className="col-12 bg-light prediction-tile">
                                            Recommended Prediction
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3 p-1">
                                        <div className="col-12 bg-light prediction-tile">
                                            Recommended Prediction
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3 p-1">
                                        <div className="col-12 bg-light prediction-tile">
                                            Recommended Prediction
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3 p-1">
                                        <div className="col-12 bg-light prediction-tile">
                                            Recommended Prediction
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row m-1 mt-4 mt-sm-1 ">
                                <div className="row">
                                    <h6 className="col-12 pl-2 d-none d-sm-block font-weight-bold">Hot Topics</h6>
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
                                    <div className="col-6 col-sm-4 col-md-3 p-1">
                                        <div className="col-12 bg-light prediction-tile">
                                            Prediction from Hot Topic
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3 p-1">
                                        <div className="col-12 bg-light prediction-tile">
                                            Prediction from Hot Topic
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3 p-1">
                                        <div className="col-12 bg-light prediction-tile">
                                            Prediction from Hot Topic
                                        </div>                
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3 p-1">
                                        <div className="col-12 bg-light prediction-tile">
                                            Prediction from Hot Topic
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row m-1 mt-4 mt-sm-1 ">
                                <div className="row">
                                    <h6 className="col-12 pl-2 d-none d-sm-block font-weight-bold">Leaderboards</h6>
                                </div>
                            </div>
                        </div>
                        <div id="activity-pane" className="col-6 col-sm-4 col-md-3 d-none d-sm-block">
                            <div className="row m-1">
                                <h6 className="col-12 pl-2 d-none d-sm-block font-weight-bold">Activity</h6>
                            </div>
                        </div>
                    </div>
        )
    }
}

export default Dashboard
