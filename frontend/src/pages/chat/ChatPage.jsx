import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { loadingStatus } from "../../shared/config/statusConsts"
import { getChannels, selectAllChannels } from "../../features/channels/model/channelsSlice"
import { getMessages, selectAllMessages } from '../../features/messages/model/messagesSlice'
import styles from './ChatPage.module.css'
import Channels from "../../widgets/channels/Channels"
import Chat from '../../widgets/chat/Chat'

const ChatPage= () => {
    const dispatch = useDispatch()
    const { token } = useSelector(state => state.auth)
    const channels = useSelector(selectAllChannels)
    const messages = useSelector(selectAllMessages)

    const { 
        status: channelsStatus, 
        error: channelsError
    } = useSelector(state => state.channels)
    const { 
        status: messagesStatus, 
        error: messagesError
    } = useSelector(state => state.messages)
    
    useEffect(() => {
        if (channelsStatus === loadingStatus.idle) {
            dispatch(getChannels(token))
        }
        if (messagesStatus === loadingStatus.idle) {
            dispatch(getMessages(token))
        }
    }, [channelsStatus, messagesStatus])

    if (channelsError) {
        return <div>Error loading channels: {channelsError}</div>;
    }
    
    if (messagesError) {
        return <div>Error loading messages: {messagesError}</div>;
    }

    return (
        <div className={styles.container}>
            <Channels />
            <Chat />
        </div>
    )
}

export default ChatPage