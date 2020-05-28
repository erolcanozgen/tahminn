import axios from 'axios'
import { API_URL } from '../components//config'
const authenticationService = {

    async IsLoggedIn() {
        let result = await axios.get(`${API_URL}/api/login/checkSession`, { withCredentials: true })
        return {
            id: result.data.id,
            isAuthenticated: result.data.isAuthenticated ? result.data.isAuthenticated : false,
            isFirstLogin: result.data.isFirstLogin ? result.data.isFirstLogin : false,
            name: result.data.name,
            providerName: result.data.providerName
        };
    }
};

export default authenticationService;