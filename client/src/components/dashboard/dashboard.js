import React, { Component } from 'react'
import Navbar from '../navbar/navbar'
import './dashboard.css'
import $ from "jquery"

class Dashboard extends Component {

    updateDimensions = () => {
        if (window.innerWidth < 576) {
            $(".row.m-1").each(function(i, row) {
                $(row).addClass("carousel-item");
                $(row).removeClass("row");
                $(row).removeClass("m-1");
                $(row.parentElement).addClass("carousel-inner");
                $(row.parentElement.parentElement).addClass("carousel slide");
            });
        }
        else {
            $(".carousel-item").each(function(i, row) {
                $(row).removeClass("carousel-item");
                $(row).addClass("row");
                $(row).addClass("m-1");
                $(row.parentElement).removeClass("carousel-inner");
                $(row.parentElement.parentElement).removeClass("carousel slide");
            });
        }
    };
    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
        this.updateDimensions();
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    render() {

        return (
            <div>
                <Navbar></Navbar>
                <div className="container">
                    <div className="row" data-ride="carousel" data-interval="false" id="prediction-carousel">
                        <ol class="carousel-indicators d-sm-none">
                            <li data-target="#prediction-carousel" data-slide-to="0" class="active">Recommended</li>
                            <li data-target="#prediction-carousel" data-slide-to="1">Hot Topics</li>
                            <li data-target="#prediction-carousel" data-slide-to="2">Leaderboards</li>
                        </ol>
                        <div className="col-12 col-md-9 mt-5 mt-sm-0 pt-5 pt-sm-0">
                            <div className="row m-1 mt-4 mt-sm-1 active">
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
                            <h4>Activity</h4>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard
