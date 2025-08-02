import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { loadingStatus } from "../../../shared/utils/statusConsts"
import messagesApi from "../api/messagesApi"

const messagesAdapter = createEntityAdapter()

const initialState = messagesAdapter.getInitialState({
    status: loadingStatus.idle,
    error: null,
})

export const getMessages = createAsyncThunk(
    'messages/getMessages',
    async (token, { rejectWithValue }) => {
        try {
            return await messagesApi.fetchAll(token)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const addMessage = createAsyncThunk(
    'messages/addMessage',
    async (message, token, { rejectWithValue }) => {
        try {
            return await messagesApi.create(message, token)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const editMessage = createAsyncThunk(
    'messages/editMessage',
    async (id, message, token, { rejectWithValue }) => {
        try {
            return await messagesApi.update(id, message, token)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const deleteMessage = createAsyncThunk(
    'messages/deleteMessage',
    async (id, token, { rejectWithValue }) => {
        try {
            return await messagesApi.remove(id, token)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    extraReducers: (builder) => {
        builder
        // getMessages error handler
            .addCase(getMessages.pending, (state) => {
                state.status = loadingStatus.loading
                state.error = null
            })
            .addCase(getMessages.fulfilled, (state, action) => {
                state.status = loadingStatus.succeeded
                messagesAdapter.setAll(state, action.payload)
            })
            .addCase(getMessages.rejected, (state, action) => {
                state.status = loadingStatus.failed
                state.error = action.payload.message
            })
        // addMessage error handler
            .addCase(addMessage.pending, (state) => {
                state.status = loadingStatus.loading
                state.error = null
            })
            .addCase(addMessage.fulfilled, (state, action) => {
                state.status = loadingStatus.succeeded
                messagesAdapter.addOne(state, action.payload)
            })
            .addCase(addMessage.rejected, (state, action) => {
                state.status = loadingStatus.failed
                state.error = action.payload.message
            })
        // editMessage error handler
            .addCase(editMessage.pending, (state) => {
                state.status = loadingStatus.loading
                state.error = null
            })
            .addCase(editMessage.fulfilled, (state, action) => {
                state.status = loadingStatus.succeeded
                messagesAdapter.updateOne(state, {
                    id: action.payload.id,
                    changes: action.payload
                })
            })
            .addCase(editMessage.rejected, (state, action) => {
                state.status = loadingStatus.failed
                state.error = action.payload.message
            })
        // deleteMessage error handler
            .addCase(deleteMessage.pending, (state) => {
                state.status = loadingStatus.loading
                state.error = null
            })
            .addCase(deleteMessage.fulfilled, (state, action) => {
                state.status = loadingStatus.succeeded
                messagesAdapter.removeOne(state, action.payload.id)
            })
            .addCase(deleteMessage.rejected, (state, action) => {
                state.status = loadingStatus.failed
                state.error = action.payload.message
            })
    }
})

export const {
  selectAll: selectAllMessages,
  selectById: selectMessageById,
  selectIds: selectMessageIds,
} = messagesAdapter.getSelectors(state => state.messages)

export default messagesSlice.reducer
