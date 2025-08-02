import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { loadingStatus } from "../../shared/utils/statusConsts"
import { getChannels, selectAllChannels } from "../../features/channels/model/channelsSlice"
import { getMessages, selectAllMessages } from '../../features/messages/model/messagesSlice'

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
        <div className="chat-container">
            <div className="channels-section">
                <h3>Channels</h3>
                <ul>
                    {channels.map(channel => (
                        <li key={channel.id}>{channel.name}</li>
                    ))}
                </ul>
            </div>
            
            <div className="messages-section">
                <h3>Messages</h3>
                <ul>
                    {messages.map(message => (
                        <li key={message.id}>
                            <strong>{message.user}:</strong> {message.content}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ChatPage