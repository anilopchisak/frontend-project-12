import styles from './ChatHeader.module.css'

const ChatHeader = ({channel, messagesCount = 0}) => {

    return (
        <div className={styles.header}>
            <h3># {channel.name}</h3>
            <p>{messagesCount} messages</p>
        </div>
    )
}

export default ChatHeader