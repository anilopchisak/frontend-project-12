import { useSelector, useDispatch } from "react-redux"
import ChannelItem from "../item/ChannelItem"
import { selectAllChannels, setCurrentChannel } from "../../../../features/channels/model/channelsSlice"
import styles from './ChannelList.module.css'

const ChannelList = () => {
    const dispatch = useDispatch()
    const channels = useSelector(selectAllChannels)
    const currentChannelId = useSelector(state => state.channels.currentChannelId)

    const handleSelect = (id) => {
        dispatch(setCurrentChannel(id))
    }

    return (
        <div className={styles.container}>
            {channels && channels.map(channel => 
                <ChannelItem 
                    key={channel.id}
                    channel={channel}
                    isActive={channel.id === currentChannelId}
                    onSelect={handleSelect}
                />
            )}
        </div>
    )
}

export default ChannelList