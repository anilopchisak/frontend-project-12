import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { loadingStatus } from '../../../../../shared/config/statusConsts.js'
import { deleteChannel } from '../../../../channels/model/channelsSlice.js'
import ModalFormLayout from '../../../../../shared/ui/form/modal/ModalFormLayout.jsx'

const DeleteModal = ({ id, onCancel }) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { status } = useSelector((state) => state.channels)
  const { token } = useSelector((state) => state.auth)

  const fieldName = ''
  const initialValues = { }
  const validationSchema = null
  const statusLoading = status === loadingStatus.loading
  const label = t('chat.confirmMessage')
  const submitText = t('chat.buttons.deleteChannel')

  const handleSubmit = () => {
    dispatch(deleteChannel({
      id: id,
      token,
    }))
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
      dangerButton={true}
    />
  )
}

export default DeleteModal
