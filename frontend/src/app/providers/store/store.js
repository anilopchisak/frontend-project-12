import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../../../features/auth/model/authSlice.js'
import channelsReducer from '../../../features/channels/model/channelsSlice.js'
import messagesReducer from '../../../features/messages/model/messagesSlice.js'
import modalReducer from '../../../features/modal/model/modalSlice.js'
import { listenerMiddleware } from './listeners.js'

export default configureStore({
  reducer: {
    auth: authReducer,
    channels: channelsReducer,
    messages: messagesReducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
})
