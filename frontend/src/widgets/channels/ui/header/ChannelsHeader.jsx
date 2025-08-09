import Button from "../../../../shared/ui/button/Button"
import styles from './ChannelsHeader.module.css'
import { buttonVariant } from "../../../../shared/utils/buttonConsts"
import { MdOutlinePlaylistAdd } from "react-icons/md"
import { useState } from "react"
import ModalWindow from "../../../../shared/ui/modal/ModalWindow"
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { addChannel } from "../../../../features/channels/model/channelsSlice"
import { newChannelNameValidationSchema } from '../../../../shared/yup/schemes'
import FormLayout from '../../../../shared/ui/form/layout/FormLayout'
import { formTypes } from "../../../../shared/utils/formTypeConsts"
import { Field } from "formik"
import FormField from "../../../../shared/ui/form/field/FormField"

const ChannelsHeader = () => {
    const [showModal, setShowModal] = useState(false)

    const { token } = useSelector(state => state.auth)

    const dispatch = useDispatch()
    const { t } = useTranslation()

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
            <ModalWindow 
                show={showModal} 
                onConfirm={handleConfirm}
                onCancel={handleCancel} 
                header={t('chat.titles.addChannel')}
            >
                <FormLayout 
                    initialValues={{ name: '' }}
                    validationSchema={() => newChannelNameValidationSchema(t)}
                    onSubmit={handleConfirm}
                    onCancel={handleCancel}
                    formType={formTypes.modal}
                >
                    <FormField 
                        label={t('chat.placeholders.newChannel')}
                        name='name'
                        autoFocus={true}
                    />
                </FormLayout>
            </ModalWindow>
        </>
    )
}

export default ChannelsHeader