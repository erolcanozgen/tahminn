import React, { Component } from 'react'
import { faStar, faStarHalfAlt, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class UserProfile extends Component {
    state = {
    }

    render() {
        return (
            <div>
                <div className="main-box clearfix">
                    <div className="w-100 justify-content-center" style={{display:'flex'}}>
                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" className="profile-img" /></div>
                    <div className="profile-label">
                        <span className="badge badge-danger">Admin</span>
                    </div>
                    <div className="profile-stars">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStarHalfAlt} />
                        <span style={{ marginLeft: '4px' }}>Super User</span>
                    </div>
                    <div className="profile-since">
                        Member since: Jan 2012
                               </div>
                    <div className="profile-details">
                        <ul className="fa-ul">
                            <li> <FontAwesomeIcon listItem={true} icon={faGlobe} />Predictions: <span>267</span></li>
                            <li> <FontAwesomeIcon listItem={true} icon={faGlobe} />Success Ratio: <span>%42</span></li>
                            <li> <FontAwesomeIcon listItem={true} icon={faGlobe} />Score: <span>189</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserProfile