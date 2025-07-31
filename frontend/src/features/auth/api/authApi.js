import axiosInstance from "../../../shared/api/axiosInstance"
import { apiRoutes } from '../../../shared/utils/apiConsts.js'

export const login = async (credentials) => {
    const response = await axiosInstance.post(
        apiRoutes.login, 
        credentials
    )
    return response.data
}

export const signup = async (userData) => {
    const response = await axiosInstance.post(
        apiRoutes.signup, 
        userData
    )
    return response.data
}
