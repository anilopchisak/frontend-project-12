import apiClient from "../../../shared/api/apiClient.js"
import { apiRoutes } from '../../../shared/utils/apiConsts.js'

const authApi = {
    login: (credentials) => apiClient.post(apiRoutes.login, credentials),
    signup: (userData) => apiClient.post(apiRoutes.signup, userData),
}

export default authApi
