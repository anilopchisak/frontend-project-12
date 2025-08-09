import styles from './ChannelItem.module.css'
import cn from 'classnames'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Dropdown from 'react-bootstrap/Dropdown'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { formTypes } from '../../../../shared/utils/formTypeConsts'
import { newChannelNameValidationSchema } from '../../../../shared/yup/schemes'
import ModalWindow from '../../../../shared/ui/modal/ModalWindow'
import FormLayout from '../../../../shared/ui/form/layout/FormLayout'
import FormField from '../../../../shared/ui/form/field/FormField'
import { useDispatch, useSelector } from 'react-redux'
import { deleteChannel, editChannel } from '../../../../features/channels/model/channelsSlice'

const ChannelItem = ({channel, isCurrent, onSelect}) => {
    const [showModal, setShowModal] = useState(false)
    const [modalType, setModalType] = useState(null) // rename, delete

    const { token } = useSelector(state => state.auth)

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

    const channelParams = {
        isRemovable: channel.removable,
        formParams: {
            initialValues: {
                rename: { name: '' },
                delete: {},
            }[modalType] ?? {},
            handleFunc: {
                rename: handleRename,
                delete: handleDelete,
            }[modalType] ?? handleDelete,
            validationSchema: {
                rename: () => newChannelNameValidationSchema(t),
                delete: null,
            }[modalType] ?? null,
            children: {
                rename: <FormField 
                            label={t('chat.placeholders.newChannel')}
                            name='name'
                            autoFocus={true}
                        />,
                delete: <p>{t('chat.confirmMessage')}</p>,
            }[modalType] ?? <p>{t('chat.confirmMessage')}</p>,
        }
    }

    return (
        <>
            <Dropdown as={ButtonGroup}>
                <Button variant="primary" onClick={handleChangeChannel} className={classesChannel}>
                    <span className={styles.channelName}># {channel.name}</span>
                </Button>
                {channelParams.isRemovable &&
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
            <ModalWindow 
                show={showModal} 
                onConfirm={channelParams.formParams.handleFunc}
                onCancel={handleCancel} 
                header={t('chat.titles.addChannel')}
            >
                <FormLayout 
                    initialValues={channelParams.formParams.initialValues}
                    validationSchema={channelParams.formParams.validationSchema}
                    onSubmit={channelParams.formParams.handleFunc}
                    onCancel={handleCancel}
                    formType={formTypes.modal}
                >
                    {channelParams.formParams.children}
                </FormLayout>
            </ModalWindow>
        </>
    )
}

export default ChannelItem