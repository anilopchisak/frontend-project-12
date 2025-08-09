import { formTypes } from "../../../utils/formTypeConsts"
import ModalWindow from '../../../../shared/ui/modal/ModalWindow'
import FormLayout from '../../../../shared/ui/form/layout/FormLayout'

const ModalFormLayout = ({
    children,
    show, 
    onSubmit,
    onCancel,
    header,
    initialValues,
    validationSchema,
}
) => {
    return (
        <ModalWindow 
            show={show} 
            onConfirm={onSubmit}
            onCancel={onCancel} 
            header={header}
        >
            <FormLayout 
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                onCancel={onCancel}
                formType={formTypes.modal}
            >
                {children}
            </FormLayout>
        </ModalWindow>
    )
}

export default ModalFormLayout