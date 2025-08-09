import useChannelsSocket from "../../features/channels/lib/useChannelsSocket"
import useMessagesSocket from "../../features/messages/lib/useMessagesSocket"

const SocketProvider = () => {
    useMessagesSocket()
    useChannelsSocket()
    return null
}

export default SocketProvider