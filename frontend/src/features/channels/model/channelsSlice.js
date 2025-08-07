import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { loadingStatus } from "../../../shared/utils/statusConsts"
import channelsApi from "../api/channelsApi"

const channelsAdapter = createEntityAdapter()

const initialState = channelsAdapter.getInitialState({
    currentChannelId: null,
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
    reducers: {
        setCurrentChannel: (state, action) => {
            state.currentChannelId = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        // getChannels error handler
            .addCase(getChannels.pending, (state) => {
                state.error = null
                state.status = loadingStatus.loading
            })
            .addCase(getChannels.fulfilled, (state, action) => {
                channelsAdapter.setAll(state, action.payload)
                state.currentChannelId = action.payload[0]?.id
                state.status = loadingStatus.succeeded
            })
            .addCase(getChannels.rejected, (state, action) => {
                state.error = action.payload.message
                state.status = loadingStatus.failed
            })
        // addChannel error handler
            .addCase(addChannel.pending, (state) => {
                state.error = null
                state.status = loadingStatus.loading
            })
            .addCase(addChannel.fulfilled, (state, action) => {
                channelsAdapter.addOne(state, action.payload)
                state.status = loadingStatus.succeeded
            })
            .addCase(addChannel.rejected, (state, action) => {
                state.error = action.payload.message
                state.status = loadingStatus.failed
            })
        // editChannel error handler
            .addCase(editChannel.pending, (state) => {
                state.error = null
                state.status = loadingStatus.loading
            })
            .addCase(editChannel.fulfilled, (state, action) => {
                channelsAdapter.updateOne(state, {
                    id: action.payload.id,
                    changes: action.payload
                })
                state.status = loadingStatus.succeeded
            })
            .addCase(editChannel.rejected, (state, action) => {
                state.error = action.payload.message
                state.status = loadingStatus.failed
            })
        // deleteChannel error handler
            .addCase(deleteChannel.pending, (state) => {
                state.error = null
                state.status = loadingStatus.loading
            })
            .addCase(deleteChannel.fulfilled, (state, action) => {
                channelsAdapter.removeOne(state, action.payload.id)
                state.currentChannelId = state.currentChannelId === action.payload.id 
                    ? state.currentChannelId 
                    : state.channels[0]?.id
                state.status = loadingStatus.succeeded
            })
            .addCase(deleteChannel.rejected, (state, action) => {
                state.error = action.payload.message
                state.status = loadingStatus.failed
            })
    }
})

export const { setCurrentChannel } = channelsSlice.actions

export const {
  selectAll: selectAllChannels,
  selectById: selectChannelById,
  selectIds: selectChannelIds,
} = channelsAdapter.getSelectors(state => state.channels)

export default channelsSlice.reducer
