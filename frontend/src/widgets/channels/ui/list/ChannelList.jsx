import { useSelector } from "react-redux"
import ChannelItem from "../item/ChannelItem"
import { selectAllChannels } from "../../../../features/channels/model/channelsSlice"
import styles from './ChannelList.module.css'

const ChannelList = () => {
    const channels = useSelector(selectAllChannels)

    return (
        <div className={styles.container}>
            <ChannelItem name='general'/>
            <ChannelItem name='general'/>
            <ChannelItem name='general'/>
            <ChannelItem name='general'/>
            <ChannelItem name='general'/>
            <ChannelItem name='general'/>
            <ChannelItem name='generalllllllllllllllllllllllllllllllllllllllllllll'/>
            <ChannelItem name='general'/>
            <ChannelItem name='general'/>
            <ChannelItem name='general'/>
            <ChannelItem name='general'/>
            <ChannelItem name='general'/>
            <ChannelItem name='general'/>
            <ChannelItem name='general'/>
            <ChannelItem name='general'/>
            <ChannelItem name='general'/>
            <ChannelItem name='general'/>
            {/* {channels && channels.map(channel => 
                <ChannelItem 
                    key={channel.id}
                    name={channel.name}
                />
            )} */}
        </div>
    )
}

export default ChannelList