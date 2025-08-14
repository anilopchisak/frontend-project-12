import { useSelector, useDispatch } from 'react-redux'
import ChannelItem from '../item/ChannelItem'
import { selectAllChannels, setCurrentChannel } from '../../../../features/channels/model/channelsSlice'

const ChannelList = () => {
  const dispatch = useDispatch()
  const channels = useSelector(selectAllChannels)
  const currentChannelId = useSelector(state => state.channels.currentChannelId)

  const handleSelect = (id) => {
    dispatch(setCurrentChannel(id))
  }

  return (
    <div className="overflow-auto h-100 w-100 d-flex flex-column flex-grow-1  gap-3 mt-4">
      {channels && channels.map(channel => (
        <ChannelItem
          key={channel.id}
          channel={channel}
          isCurrent={channel.id === currentChannelId}
          onSelect={handleSelect}
        />
      ),
      )}
    </div>
  )
}

export default ChannelList
