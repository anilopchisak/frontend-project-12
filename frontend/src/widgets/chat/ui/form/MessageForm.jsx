import { IoSend } from "react-icons/io5"
import { useTranslation } from "react-i18next"
import { Field } from "formik"
import styles from './MessageForm.module.css'
import { buttonVariant } from '../../../../shared/utils/buttonConsts'
import FormLayout from "../../../../shared/ui/form/layout/FormLayout"
import { useDispatch, useSelector } from "react-redux"
import { addMessage } from "../../../../features/messages/model/messagesSlice"
import { useRef, useState, useEffect } from "react"
import { loadingStatus } from "../../../../shared/utils/statusConsts"
import { formTypes } from "../../../../shared/utils/formTypeConsts"

const MessageForm = () => {
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const inputRef = useRef()

    const { token } = useSelector(state => state.auth)
    const { status, user } = useSelector(state => state.auth)
    const channelId = useSelector(state => state.channels.currentChannelId)

    const handleResetInputField = () => {
        setMessage('')
        inputRef.current.focus()
    }
    
    const handleChange = (message) => {
        setMessage(message)
    }  

    const handleSubmit = () => {
        if (!message.trim()) return

        const newMessage = {
            body: message,
            channelId,
            username: user,
        }

        dispatch(addMessage({message: newMessage, token}))
        handleResetInputField()
    }

    useEffect(() => {
        handleResetInputField()
    }, [channelId])

    return (
        <div className={styles.container}>
            <FormLayout
                initialValues={{ messageField: '' }}
                onSubmit={handleSubmit}
                validationSchema={null}
                submitText={<IoSend />}
                formType={formTypes.messages}
                isDisabledBtn={status === loadingStatus.loading}
            >
                <Field
                    as='textarea'
                    name='messageField'
                    value={message}
                    className={styles.fieldClass}
                    placeholder={t('chat.placeholders.newMessage')}
                    onChange={(e) => handleChange(e.target.value)}
                    ref={inputRef}
                    autoFocus
                />
            </FormLayout>
        </div>
    )
}

export default MessageForm
