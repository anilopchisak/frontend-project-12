import { Formik, Form } from 'formik'
import { buttonVariant } from '../../../config/buttonConsts'
import { formTypes } from '../../../config/formTypeConsts'
import ButtonGroup from '../../buttonGroup/ButtonGroup.jsx'

const FormLayout = ({
  children,
  initialValues,
  validationSchema,
  onSubmit,
  onCancel = null,
  submitText,
  formType = formTypes.auth,
  isDisabledBtn = false,
  dangerButton = false,
}) => {
  const formClass = {
    [formTypes.auth]: 'd-flex flex-column align-items-center w-100',
    [formTypes.messages]: 'd-flex',
    [formTypes.modal]: 'w-100',
  }[formType] ?? 'd-flex flex-column align-items-center w-100'

  const btnVariant = {
    [formTypes.auth]: buttonVariant.primaryWide,
    [formTypes.messages]: buttonVariant.icon,
    [formTypes.modal]: {
      cancel: buttonVariant.secondary,
      submit: buttonVariant.primary,
    },
  }[formType] ?? buttonVariant.primary

  const btnCount = {
    [formTypes.auth]: 1,
    [formTypes.messages]: 1,
    [formTypes.modal]: 2,
  }[formType] ?? 1

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, formikHelpers) => onSubmit(values, formikHelpers)}
      validateOnBlur={false}
    >
      <Form className={formClass}>
        {children}
        <ButtonGroup
          btnCount={btnCount}
          btnVariant={btnVariant}
          isDisabledBtn={isDisabledBtn}
          submitText={submitText}
          onCancel={onCancel}
          dangerButton={dangerButton}
        />
      </Form>
    </Formik>
  )
}

export default FormLayout
