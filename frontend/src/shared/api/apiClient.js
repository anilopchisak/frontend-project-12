import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: '/api/v1',
  timeout: 5000,
})

const getHeaders = (token) => token ? { Authorization: `Bearer ${token}` } : {}

export default {
  get: (url, token) => axiosInstance.get(url, getHeaders(token)).then(res => res.data),
  post: (url, data, token) => axiosInstance.post(url, data, getHeaders(token)).then(res => res.data),
  patch: (url, data, token) => axiosInstance.patch(url, data, getHeaders(token)).then(res => res.data),
  delete: (url, token) => axiosInstance.delete(url, getHeaders(token)).then(res => res.data),
}
