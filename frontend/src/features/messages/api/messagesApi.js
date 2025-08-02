import apiClient from '../../../shared/api/apiClient.js'
import { apiRoutes } from "../../../shared/utils/apiConsts.js"

const url = apiRoutes.messages

const messagesApi = {
    fetchAll: (token) => apiClient.get(url, token),
    create: (message, token) => apiClient.create(url, message, token),
    update: (id, message, token) => apiClient.update(url + `/${id}`, message, token),
    remove: (id, token) => apiClient.remove(url + `/${id}`, token),
}

export default messagesApi

// export const fetchMessages = async (token) => {
//     const response = await axiosInstance.get(
//         path, 
//         getHeaders(token)
//     )
//     return response.data
// }

// export const createMessage = async (newMessage, token) => {
//     const response = await axiosInstance.post(
//         path, 
//         newMessage, 
//         getHeaders(token)
//     )
//     return response.data
// }

// export const updateMessage = async (id, token) => {
//     const response = await axiosInstance.patch(
//         path + `/${id}`,
//         getHeaders(token)
//     )
//     return response.data
// }

// export const removeMessage = async (id, token) => {
//     const response = axiosInstance.delete(
//         path + `/${id}`,
//         getHeaders(token)
//     )
//     return response.data
// }
