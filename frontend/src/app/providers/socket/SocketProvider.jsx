import useChannelsSocket from '../../../features/channels/lib/useChannelsSocket.js'
import useMessagesSocket from '../../../features/messages/lib/useMessagesSocket.js'

const SocketProvider = () => {
  useMessagesSocket()
  useChannelsSocket()
  return null
}

export default SocketProvider
