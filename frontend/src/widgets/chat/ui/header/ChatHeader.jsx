import styles from './ChatHeader.module.css'

const ChatHeader = ({name}) => {

    return (
        <div className={styles.header}>
            <h3># channel name</h3>
            <p>0 messages</p>
        </div>
    )
}

export default ChatHeader