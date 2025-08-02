import apiClient from "../../../shared/api/apiClient.js"
import { apiRoutes } from "../../../shared/utils/apiConsts.js"

const url = apiRoutes.channels

const channelsApi = {
    fetchAll: (token) => apiClient.get(url, token),
    create: (channelData, token) => apiClient.post(url, channelData, token),
    update: (channelData, token) => apiClient.patch(url, channelData, token),
    remove: (id, token) => apiClient.delete(url + `/${id}`, token),
}

export default channelsApi

// const path = apiRoutes.channels

// export const fetchChannels = async () => {
//     const response = await apiClient.get(
//         path
//     )
//     return response.data
// }

// export const createChannel = async (newChannel) => {
//     const response = await apiClient.post(
//         path, 
//         newChannel
//     )
//     return response.data
// }

// export const updateChannel = async (updatedChannel) => {
//     const response = await apiClient.patch(
//         path, 
//         updatedChannel
//     )
//     return response.data
// }

// export const removeChannel = async (id) => {
//     const response = await apiClient.delete(
//         path + `/${id}`
//     )
//     return response.data
// }
