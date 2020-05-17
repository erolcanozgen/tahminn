import Cookies from 'js-cookie'
const authenticationService = {

    IsLoggedIn() {
        return Cookies.get('connect.sid');
    }
};

export default authenticationService;