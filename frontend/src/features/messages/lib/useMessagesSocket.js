import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import socket from '../../../shared/lib/socket'
import { messageRecieved } from '../model/messagesSlice'

const useMessagesSocket = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const handleNewMessage = (message) => {
      dispatch(messageRecieved(message))
    }

    socket.on('newMessage', handleNewMessage)

    return () => {
      socket.off('newMessage', handleNewMessage)
    }
  }, [dispatch])
}

export default useMessagesSocket
