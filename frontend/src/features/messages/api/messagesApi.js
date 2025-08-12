import apiClient from '../../../shared/api/apiClient.js'
import { apiRoutes } from '../../../shared/config/apiConsts.js'
import { appendId } from '../../../shared/lib/appendId.js'

const url = apiRoutes.messages

const messagesApi = {
  fetchAll: token => apiClient.get(url, token),
  create: (message, token) => apiClient.post(url, message, token),
  update: (id, message, token) => apiClient.patch(appendId(url, id), message, token),
  remove: (id, token) => apiClient.delete(appendId(url, id), token),
}

export default messagesApi
