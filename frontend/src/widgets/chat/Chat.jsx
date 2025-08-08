import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
import { selectChannelById } from "../../features/channels/model/channelsSlice"
import ChatHeader from './ui/header/ChatHeader'
import MessageList from './ui/list/MessageList'
import MessageForm from './ui/form/MessageForm'
import styles from './Chat.module.css'
import { selectAllMessages } from "../../features/messages/model/messagesSlice"

const Chat = () => {
    const { t } = useTranslation()
    const username = useSelector(state => state.auth.user)
    const messages = useSelector(selectAllMessages)
    const currentChannelId = useSelector(state => state.channels.currentChannelId)
    const currentChannel = useSelector(state => selectChannelById(state, currentChannelId))

    const currentMessages = messages.filter(message => message.channelId === currentChannelId)
    const messagesCount = currentMessages.length

    if (!currentChannel) {
        return <div className={styles.placeholder}>{t('chat.placeholders.selectChannel')}</div>
    }

    return (
        <div className={styles.container}>
            <ChatHeader 
                channel={currentChannel} 
                messagesCount={messagesCount}
            />
            <MessageList 
                currentMessages={currentMessages} 
                currentChannelId={currentChannelId} 
                username={username}
            />
            <MessageForm />
        </div>
    )
}

export default Chat