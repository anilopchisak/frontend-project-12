import apiClient from "../../../shared/api/apiClient.js"
import { apiRoutes } from '../../../shared/utils/apiConsts.js'

const authApi = {
    login: (credentials) => apiClient.post(apiRoutes.login, credentials),
    signup: (userData) => apiClient.post(apiRoutes.signup, userData),
}

export default authApi

// export const login = async (credentials) => {
//     const response = await apiClient.post(
//         apiRoutes.login, 
//         credentials
//     )
//     return response.data
// }

// export const signup = async (userData) => {
//     const response = await apiClient.post(
//         apiRoutes.signup, 
//         userData
//     )
//     return response.data
// }
