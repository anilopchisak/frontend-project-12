import apiClient from "../../../shared/api/apiClient.js"
import { apiRoutes } from "../../../shared/config/apiConsts.js"
import {appendId} from "../../../shared/lib/appendId.js";

const url = apiRoutes.channels

const channelsApi = {
    fetchAll: (token) => apiClient.get(url, token),
    create: (channelData, token) => apiClient.post(url, channelData, token),
    update: (id, channelData, token) => apiClient.patch(appendId(url, id), channelData, token),
    remove: (id, token) => apiClient.delete(appendId(url, id), token),
}

export default channelsApi
