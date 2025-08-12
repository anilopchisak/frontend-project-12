import styles from './ChatHeader.module.css'
import { useTranslation } from 'react-i18next'

const ChatHeader = ({ channel, messagesCount = 0 }) => {
  const { t } = useTranslation()
  return (
    <div className={styles.header}>
      <h3>
        #
        {channel.name}
      </h3>
      <p>{t('chat.messagesCount.messages', { count: messagesCount })}</p>
    </div>
  )
}

export default ChatHeader
