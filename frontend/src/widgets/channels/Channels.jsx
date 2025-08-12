import ChannelsHeader from './ui/header/ChannelsHeader'
import ChannelList from './ui/list/ChannelList'
import styles from './Channels.module.css'
import useChannelToast from '../toasts/hooks/useChannelToast.js'

const Channels = () => {
  useChannelToast()

  return (
    <div className={styles.container}>
      <ChannelsHeader />
      <ChannelList />
    </div>
  )
}

export default Channels
