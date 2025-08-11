import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {newChannelNameValidationSchema} from "../../../../../shared/yup/schemes.js";
import {loadingStatus} from "../../../../../shared/config/statusConsts.js";
import {editChannel} from "../../../../channels/model/channelsSlice.js";
import ModalFormLayout from "../../../../../shared/ui/form/modal/ModalFormLayout.jsx";

const RenameModal = ({id, name, onCancel}) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const {status} = useSelector(state => state.channels)
    const {token} = useSelector(state => state.auth)

    const fieldName = 'name'
    const initialValues = { [fieldName]: name }
    const validationSchema = () => newChannelNameValidationSchema(t)
    const statusLoading = status === loadingStatus.loading
    const label = null
    const submitText = t('chat.buttons.send')

    const handleSubmit = (values, {resetForm}) => {
        dispatch(editChannel({
            id: id,
            channelData: values,
            token,
        }))
        onCancel()
        resetForm()
    }

    return (
        <ModalFormLayout
            onSubmit={handleSubmit}
            onCancel={onCancel}
            initialValues={initialValues}
            validationSchema={validationSchema}
            statusLoading={statusLoading}
            submitText={submitText}
            label={label}
            fieldName={fieldName}
        />
    )
}

export default RenameModal