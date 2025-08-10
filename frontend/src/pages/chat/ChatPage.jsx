import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { loadingStatus } from "../../shared/config/statusConsts"
import { getChannels } from "../../features/channels/model/channelsSlice"
import { getMessages } from '../../features/messages/model/messagesSlice'
import styles from './ChatPage.module.css'
import Channels from "../../widgets/channels/Channels"
import Chat from '../../widgets/chat/Chat'
import {showError} from "../../shared/toastify/toast.js";
import {handleErrorTitle} from "../../shared/lib/handleNotifyTitle.js";

const ChatPage= () => {
    const dispatch = useDispatch()
    const { token } = useSelector(state => state.auth)

    const { 
        status: channelsStatus, 
        error: channelsError
    } = useSelector(state => state.channels)
    const { 
        status: messagesStatus, 
        error: messagesError
    } = useSelector(state => state.messages)
    
    useEffect(() => {
        if (channelsStatus === loadingStatus.idle && messagesStatus === loadingStatus.idle) {
            dispatch(getChannels(token))
            dispatch(getMessages(token))
        }
    }, [channelsStatus, messagesStatus])

    useEffect(() => {
        if (channelsError) {
            const title = handleErrorTitle(channelsError)
            showError(title)
        }
        if (messagesError) {
            const title = handleErrorTitle(messagesError)
            showError(title)
        }
    }, [messagesError, channelsError])

    return (
        <div className={styles.container}>
            <Channels />
            <Chat />
        </div>
    )
}

export default ChatPage