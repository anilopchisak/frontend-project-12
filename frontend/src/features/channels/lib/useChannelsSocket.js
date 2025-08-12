import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import socket from '../../../shared/lib/socket'
import { channelDeleted, channelReceived, channelRenamed } from '../model/channelsSlice'

const useChannelsSocket = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const handleNewChannel = (channel) => {
      dispatch(channelReceived(channel))
    }

    const handleDeleteChannel = (data) => {
      dispatch(channelDeleted(data))
    }

    const handleRenameChannel = (data) => {
      dispatch(channelRenamed(data))
    }

    socket.on('newChannel', handleNewChannel)
    socket.on('removeChannel', handleDeleteChannel)
    socket.on('renameChannel', handleRenameChannel)

  }, [dispatch])
}

export default useChannelsSocket
