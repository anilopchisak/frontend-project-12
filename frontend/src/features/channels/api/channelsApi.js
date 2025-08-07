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
