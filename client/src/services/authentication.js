import axios from 'axios'
import { API_URL } from '../components/login/components/loginPanel/config'
const authenticationService = {

   async IsLoggedIn() {
        let result = await axios.get(`${API_URL}/api/login/checkSession`,{ withCredentials: true })
        return result.data.IsAuthenticated;
    }
};

export default authenticationService;