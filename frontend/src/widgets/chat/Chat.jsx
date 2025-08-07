import ChatHeader from './ui/header/ChatHeader'
import MessageList from './ui/list/MessageList'
import MessageForm from './ui/form/MessageForm'
import styles from './Chat.module.css'

const Chat = () => {

    return (
        <div className={styles.container}>
            <ChatHeader />
            <MessageList />
            <MessageForm />
        </div>
    )
}

export default Chat