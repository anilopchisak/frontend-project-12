import {useTranslation} from "react-i18next";
import ModalFormLayout from "../../../../../shared/ui/form/modal/ModalFormLayout.jsx";
import {newChannelNameValidationSchema} from "../../../../../shared/yup/schemes.js";
import {useDispatch, useSelector} from "react-redux";
import {loadingStatus} from "../../../../../shared/config/statusConsts.js";
import {addChannel} from "../../../../channels/model/channelsSlice.js";

const AddModal = ({ onCancel }) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const {status} = useSelector(state => state.channels)
    const {token} = useSelector(state => state.auth)

    const fieldName = 'name'
    const initialValues = { [fieldName]: '' }
    const validationSchema = () => newChannelNameValidationSchema(t)
    const statusLoading = status === loadingStatus.loading
    const label = t('chat.titles.addChannel')
    const submitText = t('chat.buttons.addChannel')

    const handleSubmit = (values) => {
        dispatch(addChannel({channelData: values, token}))
        onCancel()
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

export default AddModal