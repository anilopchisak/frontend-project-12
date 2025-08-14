import ChannelsHeader from './ui/header/ChannelsHeader'
import ChannelList from './ui/list/ChannelList'
import useChannelToast from '../toasts/hooks/useChannelToast.js'

const Channels = () => {
  useChannelToast()

  return (
    <div className='h-100 col-3 bg-white p-4'>
      <ChannelsHeader />
      <ChannelList />
    </div>
  )
}

export default Channels
