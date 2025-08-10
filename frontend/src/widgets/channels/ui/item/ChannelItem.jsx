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
    const [showModal, setShowModal] = useState(false)
    const [modalType, setModalType] = useState(null) // rename, delete

    const { token } = useSelector(state => state.auth)

    const {status} = useSelector(state => state.channels)

    const dispatch = useDispatch()

    const handleShowModal = () => setShowModal(true)
    const handleCancel = () => setShowModal(false)

    const setRenameType = () => setModalType('rename')
    const setDeleteType = () => setModalType('delete')

    const openRenameModal = () => {
        setRenameType()
        handleShowModal()
    }

    const openDeleteModal = () => {
        setDeleteType()
        handleShowModal()
    }

    const handleRename = (values) => {
        dispatch(editChannel({
            id: channel.id,
            channelData: values,
            token,
        }))
        handleCancel()
    }

    const handleDelete = () => {
        dispatch(deleteChannel({
            id: channel.id, 
            token,
        }))
        handleCancel()
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
                                onClick={openRenameModal}
                            >
                                {t('chat.buttons.renameChannel')}
                            </Dropdown.Item>
                            <Dropdown.Item 
                                onClick={openDeleteModal}
                            >
                                {t('chat.buttons.deleteChannel')}
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </>
                }
            </Dropdown>
            {modalType === 'rename' &&
                <ModalChannelForm 
                    handleConfirm={handleRename}
                    handleCancel={handleCancel}
                    showModal={showModal}
                    typeModal='rename'
                    statusLoading={status === loadingStatus.loading}
                />
            }
            {modalType === 'delete' &&
                <ModalFormLayout 
                    show={showModal} 
                    onSubmit={handleDelete}
                    onCancel={handleCancel} 
                    header={t('chat.titles.deleteChannel')}
                    initialValues={{}}
                    validationSchema={null}
                    statusLoading={status === loadingStatus.loading}
                >
                    <p>{t('chat.confirmMessage')}</p>
                </ModalFormLayout>
            }
        </>
    )
}

export default ChannelItem