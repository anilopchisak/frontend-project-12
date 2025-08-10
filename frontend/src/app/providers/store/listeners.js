import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit'
import { deleteChannel } from '../../../features/channels/model/channelsSlice.js'
import { messagesDeletedByChannel } from '../../../features/messages/model/messagesSlice.js'

export const listenerMiddleware = createListenerMiddleware()

listenerMiddleware.startListening({
    matcher: isAnyOf(deleteChannel.fulfilled),
    effect: async (action, listenerApi) => {
        const deletedChannelId = action.payload.id
        listenerApi.dispatch(messagesDeletedByChannel(deletedChannelId))
    }
})
