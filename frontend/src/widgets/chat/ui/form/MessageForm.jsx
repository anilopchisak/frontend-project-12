import { IoSend } from "react-icons/io5"
import { useTranslation } from "react-i18next"
import { Field } from "formik"
import styles from './MessageForm.module.css'
import { buttonVariant } from '../../../../shared/utils/buttonVariantConsts'
import FormLayout from "../../../../shared/ui/form/FormLayout"
import { useDispatch, useSelector } from "react-redux"
import { addMessage } from "../../../../features/messages/model/messagesSlice"
import { useState } from "react"

const MessageForm = () => {
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()
    const { t } = useTranslation()

    const { token } = useSelector(state => state.auth)
    const { user } = useSelector(state => state.auth)
    const channelId = useSelector(state => state.channels.currentChannelId)

    const handleSubmit = () => {
        if (!message.trim()) return

        const newMessage = {
            body: message,
            channelId,
            username: user,
        }

        dispatch(addMessage({message: newMessage, token}))
        setMessage('')
    }

    const handleChange = (message) => {
        setMessage(message)
    }

    return (
        <div className={styles.container}>
            <FormLayout
                initialValues={{ messageField: '' }}
                onSubmit={handleSubmit}
                validationSchema={null}
                submitText={<IoSend />}
                btnVariant={buttonVariant.secondary}
            >
                <Field
                    as='textarea'
                    name='messageField'
                    value={message}
                    className={styles.fieldClass}
                    placeholder={t('chat.placeholders.newMessage')}
                    onChange={(e) => handleChange(e.target.value)}
                />
            </FormLayout>
        </div>
    )
}

export default MessageForm
