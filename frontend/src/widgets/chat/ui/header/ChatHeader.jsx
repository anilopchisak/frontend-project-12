import styles from './ChatHeader.module.css'
import {cleanText} from "../../../../shared/lib/profanityFilter.js"
import {useTranslation} from "react-i18next"

const ChatHeader = ({channel, messagesCount = 0}) => {
    const { t } = useTranslation()
    return (
        <div className={styles.header}>
            <h3># {cleanText(channel.name)}</h3>
            <p>{t('messages.messages', { count: messagesCount })}</p>
        </div>
    )
}

export default ChatHeader