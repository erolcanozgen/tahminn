import axios from 'axios'
import { API_URL } from '../components/login/components/loginPanel/config'
const authenticationService = {

    async IsLoggedIn() {
        let result = await axios.get(`${API_URL}/api/login/checkSession`, { withCredentials: true })
        return {
            id: result.data.id,
            isAuthenticated: result.data.isAuthenticated,
            isFirstLogin: result.data.isFirstLogin,
            name: result.data.name,
            providerName: result.data.providerName
        };
    }
};

export default authenticationService;