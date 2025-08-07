import useMessagesSocket from "../../features/messages/lib/useMessagesSocket"

const MessagesSocketProvider = () => {
    useMessagesSocket()
    return null
}

export default MessagesSocketProvider