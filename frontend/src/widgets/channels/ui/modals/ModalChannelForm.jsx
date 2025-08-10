import ModalFormLayout from "../../../../shared/ui/form/modal/ModalFormLayout"
import { newChannelNameValidationSchema } from "../../../../shared/yup/schemes"
import { useTranslation } from "react-i18next"
import FormField from "../../../../shared/ui/form/field/FormField"

const ModalChannelForm = ({
    handleConfirm,
    handleCancel,
    showModal,
    statusLoading,
    typeModal = 'create' // create, rename
}) => {
    const { t } = useTranslation()

    const header = {
        create: t('chat.titles.addChannel'),
        rename: t('chat.titles.renameChannel')
    }[typeModal] ?? t('chat.titles.addChannel')

    return (
        <ModalFormLayout 
            show={showModal} 
            onSubmit={handleConfirm}
            onCancel={handleCancel} 
            header={header}
            initialValues={{ name: '' }}
            validationSchema={() => newChannelNameValidationSchema(t)}
            statusLoading={statusLoading}
        >
            <FormField 
                label={t('chat.placeholders.newChannel')}
                name='name'
                autoFocus={true}
            />
        </ModalFormLayout>
    )
}

export default ModalChannelForm
