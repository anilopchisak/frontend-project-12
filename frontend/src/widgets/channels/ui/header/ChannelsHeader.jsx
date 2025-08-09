import Button from "../../../../shared/ui/button/Button"
import styles from './ChannelsHeader.module.css'
import { buttonVariant } from "../../../../shared/utils/buttonConsts"
import { MdOutlinePlaylistAdd } from "react-icons/md"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { addChannel } from "../../../../features/channels/model/channelsSlice"
import ModalChannelForm from "../modals/ModalChannelForm"

const ChannelsHeader = () => {
    const [showModal, setShowModal] = useState(false)

    const { token } = useSelector(state => state.auth)

    const dispatch = useDispatch()

    const handleShowModal = () => setShowModal(true)
    
    const handleCancel = () => setShowModal(false)

    const handleConfirm = (values) => {
        dispatch(addChannel({channelData: values, token}))
        handleCancel()
    }

    return (
        <>
            <div className={styles.header}>
                <h3>Каналы</h3>
                <Button
                    variant={buttonVariant.icon}
                    onClick={handleShowModal}
                >
                    <MdOutlinePlaylistAdd />
                </Button>
            </div>
            <ModalChannelForm 
                handleConfirm={handleConfirm}
                handleCancel={handleCancel}
                showModal={showModal}
                typeModal='create'
            />
        </>
    )
}

export default ChannelsHeader