import axiosInstance from "../../../shared/api/axiosInstance.js"
import { apiRoutes } from "../../../shared/utils/consts"
import { getHeaders } from '../../../shared/api/getHeaders.js'

export const fetchChannels = async (token) => {
    const response = await axiosInstance.get(
        apiRoutes.channels, 
        getHeaders(token)
    )
    return response.data
}

export const createChannel = async (newChannel, token) => {
    const response = await axiosInstance.post(
        apiRoutes.channels, newChannel, 
        getHeaders(token)
    )
    return response.data
}

export const updateChannel = async (updatedChannel, token) => {
    const response = await axiosInstance.patch(
        apiRoutes.channels, updatedChannel, 
        getHeaders(token)
    )
    return response.data
}

export const removeChannel = async (id, token) => {
    const response = await axiosInstance.delete(
        apiRoutes.channels + `/${id}`, 
        getHeaders(token)
    )
    return response.data
}
