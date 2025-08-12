import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { loadingStatus } from "../../../shared/config/statusConsts"
import channelsApi from "../api/channelsApi"
import {commonPending, commonRejected} from "../../../shared/lib/commonStatusHandlers.js";
import {lastActionChannels} from "../../../shared/config/lastActionConsts.js";

const channelsAdapter = createEntityAdapter()

const initialState = channelsAdapter.getInitialState({
    currentChannelId: null,
    status: loadingStatus.idle,
    error: null,
    lastAction: null,
})

export const getChannels = createAsyncThunk(
    'channels/getChannels',
    async (token, {rejectWithValue}) => {
        try {
            return await channelsApi.fetchAll(token)
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

export const addChannel = createAsyncThunk(
    'channels/addChannel',
    async ({channelData, token}, {rejectWithValue}) => {
        try {
            return await channelsApi.create(channelData, token)
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

export const editChannel = createAsyncThunk(
    'channel/editChannel',
    async ({id, channelData, token}, {rejectWithValue}) => {
        try {
            return await channelsApi.update(id, channelData, token)
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

export const deleteChannel = createAsyncThunk(
    'channel/deleteChannel',
    async ({id, token}, {rejectWithValue}) => {
        try {
            return await channelsApi.remove(id, token)
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

const channelsSlice = createSlice({
    name: 'channels',
    initialState,
    reducers: {
        setCurrentChannel: (state, action) => {
            state.currentChannelId = action.payload
        },
        channelReceived: (state, action) => {
            channelsAdapter.addOne(state, action.payload)
        },
        channelDeleted: (state, action) => {
            channelsAdapter.removeOne(state, action.payload.id)
            const remainingChannels = Object.values(state.entities)
            state.currentChannelId = state.currentChannelId === action.payload.id
                ? remainingChannels[0].id
                : state.currentChannelId
        },
        channelRenamed: (state, action) => {
            channelsAdapter.updateOne(state, {
                id: action.payload.id,
                changes: action.payload
            })
        },
        channelsRemoveAll: (state) => {
            channelsAdapter.removeAll(state)
            state.currentChannelId = null
            state.status = loadingStatus.idle
            state.error = null

        },
    },
    extraReducers: (builder) => {
        builder
        // getChannels error handler
            .addCase(getChannels.pending, commonPending)
            .addCase(getChannels.fulfilled, (state, action) => {
                channelsAdapter.setAll(state, action.payload)
                state.currentChannelId = action.payload[0]?.id
                state.status = loadingStatus.succeeded
                state.lastAction = lastActionChannels.get
            })
            .addCase(getChannels.rejected, commonRejected)
        // addChannel error handler
            .addCase(addChannel.pending, commonPending)
            .addCase(addChannel.fulfilled, (state, action) => {
                channelsAdapter.addOne(state, action.payload)
                state.currentChannelId = action.payload.id
                state.status = loadingStatus.succeeded
                state.lastAction = lastActionChannels.create
            })
            .addCase(addChannel.rejected, commonRejected)
        // editChannel error handler
            .addCase(editChannel.pending, commonPending)
            .addCase(editChannel.fulfilled, (state, action) => {
                channelsAdapter.updateOne(state, {
                    id: action.payload.id,
                    changes: action.payload
                })
                state.status = loadingStatus.succeeded
                state.lastAction = lastActionChannels.rename
            })
            .addCase(editChannel.rejected, commonRejected)
        // deleteChannel error handler
            .addCase(deleteChannel.pending, commonPending)
            .addCase(deleteChannel.fulfilled, (state, action) => {
                channelsAdapter.removeOne(state, action.payload.id)
                const remainingChannels = Object.values(state.entities)
                state.currentChannelId = state.currentChannelId === action.payload.id 
                    ? remainingChannels[0].id
                    : state.currentChannelId 
                state.status = loadingStatus.succeeded
                state.lastAction = lastActionChannels.delete
            })
            .addCase(deleteChannel.rejected, commonRejected)
    }
})

export const { 
    setCurrentChannel,
    channelDeleted,
    channelReceived,
    channelRenamed,
    channelsRemoveAll,
 } = channelsSlice.actions

export const {
  selectAll: selectAllChannels,
  selectById: selectChannelById,
  selectIds: selectChannelIds,
} = channelsAdapter.getSelectors(state => state.channels)

export default channelsSlice.reducer
