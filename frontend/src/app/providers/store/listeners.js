import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit'
import {channelsRemoveAll, deleteChannel} from '../../../features/channels/model/channelsSlice.js'
import {messagesDeletedByChannel, messagesRemoveAll} from '../../../features/messages/model/messagesSlice.js'
import {logout} from "../../../features/auth/model/authSlice.js";

export const listenerMiddleware = createListenerMiddleware()

listenerMiddleware.startListening({
    matcher: isAnyOf(deleteChannel.fulfilled),
    effect: async (action, listenerApi) => {
        const deletedChannelId = action.payload.id
        listenerApi.dispatch(messagesDeletedByChannel(deletedChannelId))
    }
})

listenerMiddleware.startListening({
    matcher: isAnyOf(logout),
    effect: async (_, listenerApi) => {
        listenerApi.dispatch(channelsRemoveAll())
        listenerApi.dispatch(messagesRemoveAll())
    }
})
