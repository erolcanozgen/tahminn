import React, { Component } from "react";
import "./interestSelection.css";
import interests from "./sources";
import { withTranslation } from "react-i18next";
import "./interest";
import TranslatedInterest from "./interest";



class InterestSelection extends Component {

  handleInterestClick(event){
    let columnDiv = event.target.closest(".column")
    columnDiv.style.background = "rgba(0,0,0,0.5)";
  }
  interestByCategories(category) {
    return interests.filter((x) => x.category == category).map((interest) => (
        <TranslatedInterest
          type={interest.type}
          imgSource={interest.imgSource}
          category={interest.category}
        />
    ));
  }

  handleFilter(event) {
    const { category } = event.target.dataset;

    //active class is removed from all class
    let allButtons = document.getElementsByClassName("btn");
    for (let button of allButtons) {
      button.classList.remove("active");
    }

    //active class is added to clicked button
    event.target.classList.add("active")

    let allElements = document.getElementsByClassName("row");
    //if show all is selected, all interests will be shown
    if (category === "all") {
      for (let element of allElements) {
        element.classList.remove("hidden");
        element.classList.add("show");
      }
      return;
    }

    // all interests will be hidden first
    for (let element of allElements) {
      element.classList.remove("show");
      element.classList.add("hidden");
    }

    //then selected elements will be shown
    let filteredElement = document.getElementById(category);
    filteredElement.classList.remove("hidden");
    filteredElement.classList.add("show");
  }


  render() {
    const { t } = this.props;
    return (
      <div className="container w-75 border">
        <div id="myBtnContainer" style={{marginTop: "50px"}}>
          <button data-category="all" className="btn active" onClick={this.handleFilter}>{t('InterestSelection.showall')}</button>
          <button data-category="football" className="btn" onClick={this.handleFilter}>{t('InterestSelection.football')}</button>
          <button data-category="basketball" className="btn" onClick={this.handleFilter}>{t('InterestSelection.basketball')}</button>
          <button data-category="tennis" className="btn" onClick={this.handleFilter}>{t('InterestSelection.tennis')}</button>
          <button data-category="motorsports" className="btn" onClick={this.handleFilter}>{t('InterestSelection.motorsports')}</button>
          <button data-category="teams" className="btn" onClick={this.handleFilter}>{t('InterestSelection.teams')}</button>
        </div>
        <div id="football" className="row">
          {this.interestByCategories("football")}
        </div>
        <div id="basketball" className="row">
          {this.interestByCategories("basketball")}
        </div>
        <div id="tennis" className="row">
          {this.interestByCategories("tennis")}
        </div>
        <div id="motorsports" className="row">
          {this.interestByCategories("motorsports")}
        </div>
        <div id="teams" className="row">
          {this.interestByCategories("teams")}
        </div>
      </div>
    );
  }
}

const TranslatedInterestSelection = withTranslation()(InterestSelection);
export default TranslatedInterestSelection;
