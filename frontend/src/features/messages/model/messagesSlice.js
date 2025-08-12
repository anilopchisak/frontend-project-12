import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { loadingStatus } from '../../../shared/config/statusConsts'
import messagesApi from '../api/messagesApi'
import {commonPending, commonRejected} from '../../../shared/lib/commonStatusHandlers.js'

const messagesAdapter = createEntityAdapter()

const initialState = messagesAdapter.getInitialState({
  status: loadingStatus.idle,
  error: null,
})

export const getMessages = createAsyncThunk(
  'messages/getMessages',
  async (token, {rejectWithValue}) => {
    try {
      return await messagesApi.fetchAll(token)
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

export const addMessage = createAsyncThunk(
  'messages/addMessage',
  async ({ message, token }, {rejectWithValue}) => {
    try {
      return await messagesApi.create(message, token)
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

export const editMessage = createAsyncThunk(
  'messages/editMessage',
  async ({ id, message, token }, {rejectWithValue}) => {
    try {
      return await messagesApi.update(id, message, token)
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

export const deleteMessage = createAsyncThunk(
  'messages/deleteMessage',
  async ({ id, token }, {rejectWithValue}) => {
    try {
      return await messagesApi.remove(id, token)
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

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    messageReceived: (state, action) => {
      messagesAdapter.addOne(state, action.payload)
    },
    messagesDeletedByChannel: (state, action) => {
      const channelId = action.payload
      const idsToRemove = Object.values(state.entities)
        .filter(msg => msg.channelId === channelId)
        .map(msg => msg.id)
      messagesAdapter.removeMany(state, idsToRemove)
    },
    messagesRemoveAll: (state) => {
      messagesAdapter.removeAll(state)
      state.status = loadingStatus.idle
      state.error = null
    }
  },
  extraReducers: (builder) => {
    builder
    // getMessages error handler
      .addCase(getMessages.pending, commonPending)
      .addCase(getMessages.fulfilled, (state, action) => {
        state.status = loadingStatus.succeeded
        messagesAdapter.setAll(state, action.payload)
      })
      .addCase(getMessages.rejected, commonRejected)
    // addMessage error handler
      .addCase(addMessage.pending, commonPending)
      .addCase(addMessage.fulfilled, (state, action) => {
        state.status = loadingStatus.succeeded
        messagesAdapter.addOne(state, action.payload)
      })
      .addCase(addMessage.rejected, commonRejected)
    // editMessage error handler
      .addCase(editMessage.pending, commonPending)
      .addCase(editMessage.fulfilled, (state, action) => {
        state.status = loadingStatus.succeeded
        messagesAdapter.updateOne(state, {
          id: action.payload.id,
          changes: action.payload
        })
      })
      .addCase(editMessage.rejected, commonRejected)
    // deleteMessage error handler
      .addCase(deleteMessage.pending, commonPending)
      .addCase(deleteMessage.fulfilled, (state, action) => {
        state.status = loadingStatus.succeeded
        messagesAdapter.removeOne(state, action.payload.id)
      })
      .addCase(deleteMessage.rejected, commonRejected)
  }
})

export const {
  messageReceived,
  messagesDeletedByChannel,
  messagesRemoveAll,
} = messagesSlice.actions

export const {
  selectAll: selectAllMessages,
  selectById: selectMessageById,
  selectIds: selectMessageIds,
} = messagesAdapter.getSelectors(state => state.messages)

export default messagesSlice.reducer
