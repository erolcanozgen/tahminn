import React, { Component } from 'react'
import "./interestSelection.css"
import images from './images';
import { withTranslation } from 'react-i18next';

class InterestSelection extends Component {
    state = {

    }
    render() {
        const { t } = this.props;

        return (
            <div className="container w-75">
                <div id="myBtnContainer">
                    <button className="btn active" onclick="filterSelection('all')"> Show all</button>
                    <button className="btn" onclick="filterSelection('football')"> Football</button>
                    <button className="btn" onclick="filterSelection('cars')"> Cars</button>
                    <button className="btn" onclick="filterSelection('people')"> People</button>
                </div>
                <div className="row">
                    <div className="column football">
                        <div className="content">
                            <img src={images.football.bundesliga} alt={t('Interest.bundesliga')} style={{ width: "100%" }} />
                            <label className="text-center w-100" >{t('Interest.bundesliga')}</label>
                        </div>
                    </div>
                    <div className="column football">
                        <div className="content">
                            <img src={images.football.premierLeague} alt={t('Interest.premierLeague')} style={{ width: "100%" }} />
                            <label className="text-center w-100" >{t('Interest.premierLeague')}</label>
                        </div>
                    </div>
                    <div className="column football">
                        <div className="content">
                            <img src={images.football.europeanChampionship} alt={t('Interest.europeanChampionship')} style={{ width: "100%" }} />
                            <label className="text-center w-100" >{t('Interest.europeanChampionship')}</label>
                        </div>
                    </div>
                    <div className="column football">
                        <div className="content">
                            <img src={images.football.worldCup} alt={t('Interest.worldCup')} style={{ width: "100%" }} />
                            <label className="text-center w-100" >{t('Interest.worldCup')}</label>
                        </div>
                    </div>
                    <div className="column football">
                        <div className="content">
                            <img src={images.football.laliga} alt={t('Interest.laliga')} style={{ width: "100%" }} />
                            <label className="text-center w-100" >{t('Interest.laliga')}</label>
                        </div>
                    </div>
                    <div className="column football">
                        <div className="content">
                            <img src={images.football.ligue1} alt={t('Interest.ligueOne')} style={{ width: "100%" }} />
                            <label className="text-center w-100" >{t('Interest.ligueOne')}</label>
                        </div>
                    </div>
                    <div className="column football">
                        <div className="content">
                            <img src={images.football.turkishLeague} alt={t('Interest.turkishLeague')} style={{ width: "100%" }} />
                            <label className="text-center w-100" >{t('Interest.turkishLeague')}</label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const TranslatedInterestSelection = withTranslation()(InterestSelection);

export default TranslatedInterestSelection;