import { configureStore } from "@reduxjs/toolkit"
import authReducer from '../../features/auth/model/authSlice.js'
import channelsReducer from '../../features/channels/model/channelsSlice.js'
import messagesReducer from '../../features/messages/model/messagesSlice.js'

export default configureStore({
    reducer: {
        auth: authReducer,
        channels: channelsReducer,
        messages: messagesReducer,
    }
})
