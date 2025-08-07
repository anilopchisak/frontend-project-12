import ChannelsHeader from './ui/header/ChannelsHeader'
import ChannelList from './ui/list/ChannelList'
import styles from './Channels.module.css'

const Channels = () => {
    return (
        <div className={styles.container}>
            <ChannelsHeader />
            <ChannelList />
        </div>
    )
}

export default Channels