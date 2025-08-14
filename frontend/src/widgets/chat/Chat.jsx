import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { selectChannelById } from '../../features/channels/model/channelsSlice'
import ChatHeader from './ui/header/ChatHeader'
import MessageList from './ui/list/MessageList'
import MessageForm from './ui/form/MessageForm'
import { selectAllMessages } from '../../features/messages/model/messagesSlice'
import { useEffect } from 'react'
import { showError } from '../../shared/toastify/toast.js'

const Chat = () => {
  const { t } = useTranslation()
  const username = useSelector(state => state.auth.user)
  const messages = useSelector(selectAllMessages)
  const { errorChannels } = useSelector(state => state.channels)
  const { errorMessages } = useSelector(state => state.messages)
  const currentChannelId = useSelector(state => state.channels.currentChannelId)
  const currentChannel = useSelector(state => selectChannelById(state, currentChannelId))

  const currentMessages = messages.filter(message => message.channelId === currentChannelId)
  const messagesCount = currentMessages.length

  useEffect(() => {
    if (errorChannels) {
      showError(errorChannels)
    }
    if (errorMessages) {
      showError(errorMessages)
    }
  }, [errorChannels, errorMessages])

  if (!currentChannel) {
    return <div className="mx-auto fw-bold text-secondary px-3 py-2">{t('chat.placeholders.selectChannel')}</div>
  }

  return (
    <div className="h-100 bg-white d-flex flex-column w-100">
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
