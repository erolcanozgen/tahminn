import React, { Component } from 'react'
import UserProfile from './components/userProfile/userProfile';
import UserInfo from './components/userInfo/userInfo';
import './profile.css'
class Profile extends Component {
    state = {
    }

    render() {
        return (
            <div>
                <div className="container bootstrap snippets">
                    <div className="row" id="user-profile">
                        <div className="col-lg-3 col-md-4 col-sm-4">
                            <UserProfile></UserProfile>
                        </div>
                        <div className="col-lg-9 col-md-8 col-sm-8">
                            <UserInfo></UserInfo>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile