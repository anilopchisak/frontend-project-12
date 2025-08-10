import Button from "../../../../shared/ui/button/Button"
import styles from './ChannelsHeader.module.css'
import { buttonVariant } from "../../../../shared/config/buttonConsts"
import { MdOutlinePlaylistAdd } from "react-icons/md"
import {useEffect, useState} from "react"
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { addChannel } from "../../../../features/channels/model/channelsSlice"
import ModalChannelForm from "../modals/ModalChannelForm"
import {showError, showSuccess} from "../../../../shared/toastify/toast.js";
import {loadingStatus} from "../../../../shared/config/statusConsts.js";
import {lastActionChannels} from "../../../../shared/config/lastActionConsts.js";

const ChannelsHeader = () => {
    const [showModal, setShowModal] = useState(false)

    const { token } = useSelector(state => state.auth)

    const { lastAction, error, status } = useSelector(state => state.channels)

    const dispatch = useDispatch()

    const { t } = useTranslation()

    const handleShowModal = () => setShowModal(true)
    
    const handleCancel = () => setShowModal(false)

    const handleConfirm = (values) => {
        dispatch(addChannel({channelData: values, token}))
        handleCancel()
    }

    useEffect(() => {
        if (lastAction === lastActionChannels.create && status === loadingStatus.succeeded) {
            showSuccess(t('messages.channel.created'))
        }
        if (lastAction === lastActionChannels.rename && status === loadingStatus.succeeded) {
            showSuccess(t('messages.channel.renamed'))
        }
        if (lastAction === lastActionChannels.delete && status === loadingStatus.succeeded) {
            showSuccess(t('messages.channel.deleted'))
        }
    }, [lastAction, t])

    useEffect(() => {
        if (error) {
            showError(error)
        }
    }, [error])

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