import { IoSend } from "react-icons/io5"
import { useTranslation } from "react-i18next"
import { Field } from "formik"
import styles from './MessageForm.module.css'
import { buttonVariant } from '../../../../shared/utils/buttonVariantConsts'
import FormLayout from "../../../../shared/ui/form/FormLayout"

const MessageForm = () => {
    const { t } = useTranslation()

    const iconSend = <IoSend />

    const handleSubmit = () => {

    }

    return (
        <div className={styles.container}>
            <FormLayout
                initialValues={{ 
                    username: '', 
                    password: '',
                    confirmPassword: '',
                }}
                onSubmit={handleSubmit}
                validationSchema={null}
                submitText={iconSend}
                btnVariant={buttonVariant.secondary}
            >
                <Field
                    type='text'
                    name='messageField'
                    className={styles.fieldClass}
                    placeholder={t('chat.placeholders.newMessage')}
                />
            </FormLayout>
        </div>
    )
}

export default MessageForm
