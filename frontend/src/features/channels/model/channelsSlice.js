import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { loadingStatus } from "../../../shared/utils/statusConsts"
import channelsApi from "../api/channelsApi"

const channelsAdapter = createEntityAdapter()

const initialState = channelsAdapter.getInitialState({
    status: loadingStatus.idle,
    error: null,
})

export const getChannels = createAsyncThunk(
    'channels/getChannels',
    async (token, { rejectWithValue }) => {
        try {
            return await channelsApi.fetchAll(token)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const addChannel = createAsyncThunk(
    'channels/addChannel',
    async (channelData, token, { rejectWithValue }) => {
        try {
            return await channelsApi.create(channelData, token)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const editChannel = createAsyncThunk(
    'channel/editChannel',
    async (channelData, token, { rejectWithValue }) => {
        try {
            return await channelsApi.update(channelData, token)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const deleteChannel = createAsyncThunk(
    'channel/deleteChannel',
    async (id, token, { rejectWithValue }) => {
        try {
            return await channelsApi.remove(id, token)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

const channelsSlice = createSlice({
    name: 'channels',
    initialState,
    extraReducers: (builder) => {
        builder
        // getChannels error handler
            .addCase(getChannels.pending, (state) => {
                state.status = loadingStatus.loading
                state.error = null
            })
            .addCase(getChannels.fulfilled, (state, action) => {
                state.status = loadingStatus.succeeded
                channelsAdapter.setAll(state, action.payload)
            })
            .addCase(getChannels.rejected, (state, action) => {
                state.status = loadingStatus.failed
                state.error = action.payload.message
            })
        // addChannel error handler
            .addCase(addChannel.pending, (state) => {
                state.status = loadingStatus.loading
                state.error = null
            })
            .addCase(addChannel.fulfilled, (state, action) => {
                state.status = loadingStatus.succeeded
                channelsAdapter.addOne(state, action.payload)
            })
            .addCase(addChannel.rejected, (state, action) => {
                state.status = loadingStatus.failed
                state.error = action.payload.message
            })
        // editChannel error handler
            .addCase(editChannel.pending, (state) => {
                state.status = loadingStatus.loading
                state.error = null
            })
            .addCase(editChannel.fulfilled, (state, action) => {
                state.status = loadingStatus.succeeded
                channelsAdapter.updateOne(state, {
                    id: action.payload.id,
                    changes: action.payload
                })
            })
            .addCase(editChannel.rejected, (state, action) => {
                state.status = loadingStatus.failed
                state.error = action.payload.message
            })
        // deleteChannel error handler
            .addCase(deleteChannel.pending, (state) => {
                state.status = loadingStatus.loading
                state.error = null
            })
            .addCase(deleteChannel.fulfilled, (state, action) => {
                state.status = loadingStatus.succeeded
                channelsAdapter.removeOne(state, action.payload.id)
            })
            .addCase(deleteChannel.rejected, (state, action) => {
                state.status = loadingStatus.failed
                state.error = action.payload.message
            })
    }
})

export const {
  selectAll: selectAllChannels,
  selectById: selectChannelById,
  selectIds: selectChannelIds,
} = channelsAdapter.getSelectors(state => state.channels)

export default channelsSlice.reducer
