import { IoSend } from "react-icons/io5"
import { useTranslation } from "react-i18next"
import { Field } from "formik"
import styles from './MessageForm.module.css'
import FormLayout from "../../../../shared/ui/form/layout/FormLayout"
import { useDispatch, useSelector } from "react-redux"
import { addMessage } from "../../../../features/messages/model/messagesSlice"
import { useRef, useEffect } from "react"
import { loadingStatus } from "../../../../shared/config/statusConsts"
import { formTypes } from "../../../../shared/config/formTypeConsts"

const MessageForm = () => {
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const inputRef = useRef()

    const { token } = useSelector(state => state.auth)
    const { status, user } = useSelector(state => state.auth)
    const channelId = useSelector(state => state.channels.currentChannelId)

    const handleResetInputField = () => {
        inputRef.current.focus()
    }

    const handleSubmit = ({messageField}, {resetForm}) => {
        if (!messageField.trim()) return

        const newMessage = {
            body: messageField,
            channelId,
            username: user,
        }

        dispatch(addMessage({message: newMessage, token}))
        handleResetInputField()
        resetForm()
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
                    name='messageField'
                    className={styles.fieldClass}
                    placeholder={t('chat.placeholders.newMessage')}
                    ref={inputRef}
                    autoFocus
                />
            </FormLayout>
        </div>
    )
}

export default MessageForm
