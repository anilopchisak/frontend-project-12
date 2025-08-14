import MessageItem from '../message/MessageItem'
import { useEffect, useRef } from 'react'

const MessageList = ({ currentMessages, username }) => {
  const containerRef = useRef(null)
  const previousMessagesLengthRef = useRef(0)

  useEffect(() => {
    const lastMessage = currentMessages.at(-1)
    const wasSentByUser = lastMessage?.username === username
    const isFirstLoad = previousMessagesLengthRef.current === 0
    const hasNewMessage = currentMessages.length > previousMessagesLengthRef.current

    const shouldScroll = isFirstLoad || (hasNewMessage && wasSentByUser)

    if (containerRef.current && shouldScroll) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }

    previousMessagesLengthRef.current = currentMessages.length
  }, [currentMessages, username])

  return (
    <div className="overflow-x-hidden h-100 d-flex flex-column" ref={containerRef}>
      {currentMessages.map(message => (
        <MessageItem
          key={message.id}
          isUser={message.username === username}
          message={message}
        />
      ),
      )}
    </div>
  )
}

export default MessageList
