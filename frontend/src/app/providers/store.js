import { configureStore } from "@reduxjs/toolkit"
import authReducer from '../../features/auth/model/authSlice.js'

export default configureStore({
    reducer: {
        auth: authReducer,
    }
})
