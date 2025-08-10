import styles from './ChatHeader.module.css'
import {cleanText} from "../../../../shared/lib/profanityFilter.js";

const ChatHeader = ({channel, messagesCount = 0}) => {

    return (
        <div className={styles.header}>
            <h3># {cleanText(channel.name)}</h3>
            <p>{messagesCount} messages</p>
        </div>
    )
}

export default ChatHeader