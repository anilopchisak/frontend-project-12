import styles from './ChannelItem.module.css'
import cn from 'classnames'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Dropdown from 'react-bootstrap/Dropdown'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import ModalChannelForm from '../modals/ModalChannelForm'
import { useDispatch, useSelector } from 'react-redux'
import { deleteChannel, editChannel } from '../../../../features/channels/model/channelsSlice'
import ModalFormLayout from '../../../../shared/ui/form/modal/ModalFormLayout'
import {cleanText} from "../../../../shared/lib/profanityFilter.js";
import {loadingStatus} from "../../../../shared/config/statusConsts.js";

const ChannelItem = ({channel, isCurrent, onSelect}) => {
    const [showRenameModal, setShowRenameModal] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)

    const { token } = useSelector(state => state.auth)
    const {status} = useSelector(state => state.channels)

    const dispatch = useDispatch()

    const handleShowRenameModal = () => setShowRenameModal(true)
    const handleRenameCancel = () => setShowRenameModal(false)

    const handleShowDeleteModal = () => setShowDeleteModal(true)
    const handleDeleteCancel = () => setShowDeleteModal(false)

    const handleRename = (values) => {
        dispatch(editChannel({
            id: channel.id,
            channelData: values,
            token,
        }))
        handleRenameCancel()
    }

    const handleDelete = () => {
        dispatch(deleteChannel({
            id: channel.id, 
            token,
        }))
        handleDeleteCancel()
    }

    const handleChangeChannel = () => {
        onSelect(channel.id)
    }

    const { t } = useTranslation()

    const classesChannel = cn({
        [styles.item]: true,
        [styles.default]: !isCurrent,
        [styles.defaultChannel]: true,
    })

    const classesToggle = cn({
        [styles.item]: true,
        [styles.default]: !isCurrent,
        [styles.defaultToggle]: true,
    })

    const isRemovable = channel.removable

    return (
        <>
            <Dropdown as={ButtonGroup}>
                <Button variant="primary" onClick={handleChangeChannel} className={classesChannel}>
                    <span className={styles.channelName}># {cleanText(channel.name)}</span>
                </Button>
                {isRemovable &&
                    <>
                        <Dropdown.Toggle 
                            split 
                            variant="primary" 
                            id="dropdown-split-primary" 
                            className={classesToggle}
                        />
                        <Dropdown.Menu>
                            <Dropdown.Item 
                                onClick={handleShowRenameModal}
                            >
                                {t('chat.buttons.renameChannel')}
                            </Dropdown.Item>
                            <Dropdown.Item 
                                onClick={handleShowDeleteModal}
                            >
                                {t('chat.buttons.deleteChannel')}
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </>
                }
            </Dropdown>
            <ModalChannelForm
                showModal={showRenameModal}
                handleConfirm={handleRename}
                handleCancel={handleRenameCancel}
                statusLoading={status === loadingStatus.loading}
            />
            <ModalFormLayout
                show={showDeleteModal}
                onSubmit={handleDelete}
                onCancel={handleDeleteCancel}
                header={t('chat.titles.deleteChannel')}
                initialValues={{}}
                validationSchema={null}
                statusLoading={status === loadingStatus.loading}
            >
                <p>{t('chat.confirmMessage')}</p>
            </ModalFormLayout>
        </>
    )
}

export default ChannelItem