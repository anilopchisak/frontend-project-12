import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { loadingStatus } from '../../../shared/utils/statusConsts.js'
import authApi from '../api/authApi.js'

const initialState ={
    user: localStorage.getItem('username') ?? null,
    token: localStorage.getItem('userToken') ?? null,
    status: loadingStatus.idle,
    error: null,
}

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
        const data = await authApi.login(credentials)
        localStorage.setItem('userToken', data.token)
        localStorage.setItem('username', data.username)
        return data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
  }
)

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (userData, { rejectWithValue }) => {
    try {
        const data = await authApi.signup(userData)
        localStorage.setItem('userToken', data.token)
        localStorage.setItem('username', data.username)
        return data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
  }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null
            state.token = null
            state.status = loadingStatus.idle
            localStorage.removeItem('userToken')
        },
    },
    extraReducers: (builder) => {
        builder 
        // loginUser handler
            .addCase(loginUser.pending, (state) => {
                state.status = loadingStatus.loading
                state.error = null
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = loadingStatus.succeeded
                state.user = action.payload.username
                state.token = action.payload.token
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = loadingStatus.failed
                state.error = action.payload.message
            })
        // signupUser handler
            .addCase(registerUser.pending, (state) => {
                state.status = loadingStatus.loading
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.status = loadingStatus.succeeded
                state.user = action.payload.username
                state.token = action.payload.token
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.status = loadingStatus.failed
                state.error = action.payload.message
            })
    }
})

export const { logout } = authSlice.actions
export default authSlice.reducer
