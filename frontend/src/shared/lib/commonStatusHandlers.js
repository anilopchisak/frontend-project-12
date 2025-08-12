import { loadingStatus } from '../config/statusConsts.js'

export const commonPending = (state) => {
  state.status = loadingStatus.loading
  state.error = null
}
export const commonRejected = (state, action) => {
  state.status = loadingStatus.failed
  state.error = action.payload
}
