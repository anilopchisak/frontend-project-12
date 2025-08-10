import styles from './MessageItem.module.css'
import cn from 'classnames'
import { cleanText } from '../../../../shared/lib/profanityFilter'

const MessageItem = ({isUser = true, message}) => {
    const classes = cn({
        [styles.container]: true,
        [styles.user]: isUser,
        [styles.notUser]: !isUser,
    })

    return (
        <div className={classes}>
            <p className={styles.username}>{message.username}</p>
            <p>{cleanText(message.body)}</p>
        </div>
    )
}

export default MessageItem