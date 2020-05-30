import React, { Component } from 'react'
import { faPencilAlt, faTimes, faCheck, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './userInfo.css'

class UserInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        const { user } = this.props;
        this.setState({ user });
    }

    render() {
        return (
            <div>
                <div className="main-box clearfix">
                    <div className="profile-header">
                        <a href="#" className="btn btn-primary edit-profile">
                            <FontAwesomeIcon icon={faPencilAlt} /> Edit profile
                        </a>
                    </div>
                    <div className="row profile-user-info">
                        <div className="col-sm-8">
                            <div className="profile-user-details clearfix">
                                <div className="profile-user-details-label">
                                    User Name:
                                </div>
                                <div className="profile-user-details-value">
                                    {this.state.user ? this.state.user.name : "" }
                                </div>
                            </div>
                            <div className="profile-user-details clearfix">
                                <div className="profile-user-details-label">
                                    Description:
                                </div>
                                <div className="profile-user-details-value">
                                    Bir deli fişek 'tahminn'ci
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tabs-wrapper profile-tabs">
                        <ul className="nav nav-tabs">
                            <li className="nav-item"><a className='nav-link active' href="#tab-activity" data-toggle="tab">Prediction History</a></li>
                            <li className="nav-item"><a className='nav-link' href="#tab-friends" data-toggle="tab">Friends</a></li>
                            <li className="nav-item"><a className='nav-link' href="#tab-leagues" data-toggle="tab">Joined Leagues</a></li>
                        </ul>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane fade show  active" id="tab-activity">
                            <div className="table-responsive">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td>
                                                Türkiye Spor Toto Super Lig Kazananı
                                            </td>
                                            <td>
                                                Fenerbahçe
                                            </td>
                                            <td>
                                                <FontAwesomeIcon title="will end on 25.07.2020 " icon={faClock}></FontAwesomeIcon>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                2020 Survivor  Kazananı
                                            </td>
                                            <td>
                                                Ersin Korkut
                                            </td>
                                            <td>
                                                <span title="lost" className="badge badge-danger" style={{ padding: '3px 5px 3px 5px' }}>
                                                    <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                2019-2020 Formula 1  Kazananı
                                            </td>
                                            <td>
                                                Lewis Hamilton
                                            </td>
                                            <td>
                                                <span title="lost" className="badge badge-success" style={{ padding: '3px 5px 3px 5px' }}>
                                                    <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tab-friends">
                            <ul className="widget-users row">
                                <li className="col-md-6">
                                    <div className="img">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" width="50px" alt=""></img>
                                    </div>
                                    <div className="details">
                                        <div className="name">
                                            <a href="#">Mahmut </a>
                                        </div>
                                    </div>
                                </li>
                                <li className="col-md-6">
                                    <div className="img">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" width="50px" alt=""></img>
                                    </div>
                                    <div className="details">
                                        <div className="name">
                                            <a href="#">Ahmet </a>
                                        </div>
                                    </div>
                                </li>
                                <li className="col-md-6">
                                    <div className="img">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" width="50px" alt=""></img>
                                    </div>
                                    <div className="details">
                                        <div className="name">
                                            <a href="#">Veli</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-pane fade" id="tab-leagues">
                            <div className="tabbable">
                                <ul className="nav nav-tabs">
                                    <li className="nav-item"><a className='nav-link active' href="#tab-leagues-friends" data-toggle="tab">Between Friends</a></li>
                                    <li className="nav-item"><a className='nav-link' href="#tab-leagues-1" data-toggle="tab">League 1</a></li>
                                    <li className="nav-item"><a className='nav-link' href="#tab-leagues-2" data-toggle="tab">League 2</a></li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="tab-leagues-friends">
                                        <table className="league-table" style={{ padding: '10px' }}>
                                            <tbody>
                                                <tr className="current-user">
                                                    <td>1.</td>
                                                    <td>John Doe</td>
                                                    <td>189</td>
                                                </tr>
                                                <tr>
                                                    <td>2.</td>
                                                    <td>Mahmut</td>
                                                    <td>150</td>
                                                </tr>
                                                <tr>
                                                    <td>3.</td>
                                                    <td>Veli</td>
                                                    <td>120</td>
                                                </tr>
                                                <tr>
                                                    <td>4.</td>
                                                    <td>Ahmet</td>
                                                    <td>120</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="tab-pane fade" id="tab-leagues-1">
                                        <table className="league-table" style={{ padding: '10px' }}>
                                            <tbody>
                                                <tr>
                                                    <td>1.</td>
                                                    <td>Crazy</td>
                                                    <td>200</td>
                                                </tr>
                                                <tr className="current-user">
                                                    <td>2.</td>
                                                    <td>John Doe</td>
                                                    <td>189</td>
                                                </tr>
                                                <tr>
                                                    <td>3.</td>
                                                    <td>Deli fişek</td>
                                                    <td>120</td>
                                                </tr>
                                                <tr>
                                                    <td>4.</td>
                                                    <td>George</td>
                                                    <td>100</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="tab-pane fade" id="tab-leagues-2">
                                        <table className="league-table" style={{ padding: '10px' }}>
                                            <tbody>
                                                <tr>
                                                    <td>1.</td>
                                                    <td>Reis</td>
                                                    <td>250</td>
                                                </tr>
                                                <tr>
                                                    <td>2.</td>
                                                    <td>Sakura</td>
                                                    <td>220</td>
                                                </tr>
                                                <tr>
                                                    <td>3.</td>
                                                    <td>Pelinsu</td>
                                                    <td>192</td>
                                                </tr>
                                                <tr className="current-user">
                                                    <td>4.</td>
                                                    <td>John Doe</td>
                                                    <td>189</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default UserInfo