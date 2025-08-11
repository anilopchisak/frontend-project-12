import { formTypes } from "../../../config/formTypeConsts"
import FormLayout from '../../../../shared/ui/form/layout/FormLayout'
import FormField from "../field/FormField.jsx";

const ModalFormLayout = ({
    onSubmit,
    onCancel,
    initialValues,
    validationSchema,
    statusLoading,
    label,
    fieldName,
    submitText,
}
) => {
    return (
        <FormLayout
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            onCancel={onCancel}
            formType={formTypes.modal}
            isDisabledBtn={statusLoading}
            submitText={submitText}
        >
            {fieldName ?
                <FormField
                    label={label}
                    name={fieldName}
                    autoFocus={true}
                />
                :
                <p>{label}</p>
            }
        </FormLayout>
    )
}

export default ModalFormLayout