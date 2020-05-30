import React, { Component } from "react";
import "./interestSelection.css";
import { withTranslation } from "react-i18next";
import "./interest";
import TranslatedInterest from "./interest";
import history from '../../services/history'
import { API_URL } from '../config'
import axios from 'axios'

class InterestSelection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      interests: [],
      numberOfTotalItems: 5,
      numberOfRemainingItems: 5
    }
  }

  async componentDidMount() {
    let interests = await this.getAllInterests();
    this.setState({ interests: interests })
  }

  getNumberOfRemainingItems = () => {
    let numberOfCheckedItems = document.querySelectorAll('.checked').length;
    this.setState({ numberOfRemainingItems: this.state.numberOfTotalItems - numberOfCheckedItems })
  }

  async getAllInterests() {
    let interests = await axios.get(`${API_URL}/api/interest/getAllInterests`);
    var interestJson = [];
    interests.data.map(function (interest) {
      interestJson.push({
        "id": interest.id,
        "type": interest.name,
        "imgSource": interest.imageUrl.toString(),
        "category": interest.category.name
      });
    });

    return interestJson;
  }

  interestByCategories(category) {
    return this.state.interests.filter((x) => x.category == category).map((interest) => (
      <TranslatedInterest
        onChange={this.getNumberOfRemainingItems}
        id={interest.id}
        type={interest.type}
        imgSource={interest.imgSource}
        category={interest.category}
      />
    ));
  }

  handleFilter(event) {
    const { category } = event.target.dataset;

    //active class is removed from all class
    let allButtons = document.getElementsByClassName("categoryButtons");
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

  redirectToHomePage() {
    let selectedInterests = document.getElementsByClassName("checked");
    let selectedInterestIds = [];
    for (let selectedInterest of selectedInterests) {
      let id = selectedInterest.querySelector("label").getAttribute("data-id");
      selectedInterestIds.push(id);
    }
    history.push('/');
  }

  render() {
    const { t } = this.props;
    return (
      <div className="container">
        <div id="categoryTextDiv" className="border border-dark">
          <span className="margin" style={{ fontSize: 19, fontWeight: "bold" }}>{t('InterestSelection.interestQuestion')}</span>
        </div>
        <div id="categoriesDiv" className="border border-dark">
          <div id="categoryDiv" className="margin" >
            <button data-category="all" className="categoryButtons active" onClick={this.handleFilter}>{t('InterestSelection.showall')}</button>
            <button data-category="football" className="categoryButtons" onClick={this.handleFilter}>{t('InterestSelection.football')}</button>
            <button data-category="basketball" className="categoryButtons" onClick={this.handleFilter}>{t('InterestSelection.basketball')}</button>
            <button data-category="tennis" className="categoryButtons" onClick={this.handleFilter}>{t('InterestSelection.tennis')}</button>
            <button data-category="motorsports" className="categoryButtons" onClick={this.handleFilter}>{t('InterestSelection.motorsports')}</button>
            <button data-category="teams" className="categoryButtons" onClick={this.handleFilter}>{t('InterestSelection.teams')}</button>
          </div>
          <div id="football" className="row margin">
            {this.interestByCategories("football")}
          </div>
          <div id="basketball" className="row margin">
            {this.interestByCategories("basketball")}
          </div>
          <div id="tennis" className="row margin">
            {this.interestByCategories("tennis")}
          </div>
          <div id="motorsports" className="row margin">
            {this.interestByCategories("motorsports")}
          </div>
          <div id="teams" className="row margin">
            {this.interestByCategories("teams")}
          </div>
        </div>
        <div id="submitButtonsDiv" className="border border-dark">
          {
            this.state.numberOfRemainingItems <= 0 ?
              (<button type="button" className="btn btn-primary floatRight" onClick={this.redirectToHomePage} >{t('InterestSelection.finish')}</button>)
              :
              (<button type="button" className="btn btn-primary disabled floatRight">{t('InterestSelection.continueText',
                { numberOfRemainingItems: this.state.numberOfRemainingItems })}</button>)
          }

        </div>
      </div>
    );
  }
}

const TranslatedInterestSelection = withTranslation()(InterestSelection);
export default TranslatedInterestSelection;
