import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { loadingStatus } from '../../../shared/config/statusConsts.js'
import authApi from '../api/authApi.js'
import {commonPending, commonRejected} from '../../../shared/lib/commonStatusHandlers.js'

const initialState ={
  user: localStorage.getItem('username') ?? null,
  token: localStorage.getItem('userToken') ?? null,
  status: loadingStatus.idle,
  error: null,
  lastAction: null, // login, signup
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
      const errorData = error.response.data
                ||
                {
                  statusCode: error.status,
                  statusText: error.response.statusText
                }
      return rejectWithValue(errorData)
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
      const errorData = error.response.data
                ||
                {
                  statusCode: error.status,
                  statusText: error.response.statusText
                }
      return rejectWithValue(errorData)
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
      localStorage.removeItem('username')
    },
    clearStatus: (state) => {
      state.status = loadingStatus.idle
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder 
    // loginUser handler
      .addCase(loginUser.pending, commonPending)
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = loadingStatus.succeeded
        state.user = action.payload.username
        state.token = action.payload.token
        state.lastAction = 'login'
      })
      .addCase(loginUser.rejected, commonRejected)
    // signupUser handler
      .addCase(registerUser.pending, commonPending)
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = loadingStatus.succeeded
        state.user = action.payload.username
        state.token = action.payload.token
        state.lastAction = 'signup'
      })
      .addCase(registerUser.rejected, commonRejected)
  }
})

export const { logout, clearStatus } = authSlice.actions
export default authSlice.reducer
