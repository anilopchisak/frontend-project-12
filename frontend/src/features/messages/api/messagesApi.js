import axiosInstance from '../../../shared/api/axiosInstance.js'
import { apiRoutes } from "../../../shared/utils/apiConsts.js"
import { getHeaders } from '../../../shared/api/getHeaders.js'

export const fetchMessages = async (token) => {
    const response = await axiosInstance.get(
        apiRoutes.messages, 
        getHeaders(token)
    )
    return response.data
}

export const createMessage = async (newMessage, token) => {
    const response = await axiosInstance.post(
        apiRoutes.messages, 
        newMessage, 
        getHeaders(token)
    )
    return response.data
}

export const updateMessage = async (id, token) => {
    const response = await axiosInstance.patch(
        apiRoutes.messages + + `/${id}`,
        getHeaders(token)
    )
    return response.data
}

export const removeMessage = async (id, token) => {
    const response = axiosInstance.delete(
        apiRoutes.messages + + `/${id}`,
        getHeaders(token)
    )
    return response.data
}
