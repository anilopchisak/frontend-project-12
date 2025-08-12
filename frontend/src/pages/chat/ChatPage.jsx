import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { loadingStatus } from '../../shared/config/statusConsts'
import { getChannels } from '../../features/channels/model/channelsSlice'
import { getMessages } from '../../features/messages/model/messagesSlice'
import styles from './ChatPage.module.css'
import Channels from '../../widgets/channels/Channels'
import Chat from '../../widgets/chat/Chat'

const ChatPage= () => {
  const dispatch = useDispatch()
  const { token } = useSelector(state => state.auth)

  const { 
    status: channelsStatus
  } = useSelector(state => state.channels)
  const { 
    status: messagesStatus
  } = useSelector(state => state.messages)
    
  useEffect(() => {
    if (channelsStatus === loadingStatus.idle && messagesStatus === loadingStatus.idle) {
      dispatch(getChannels(token))
      dispatch(getMessages(token))
    }
  }, [channelsStatus, messagesStatus, dispatch, token])

  return (
    <div className={styles.container}>
      <Channels />
      <Chat />
    </div>
  )
}

export default ChatPage