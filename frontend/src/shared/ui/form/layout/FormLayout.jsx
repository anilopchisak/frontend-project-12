import {Formik, Form} from "formik"
import styles from './FormLayout.module.css'
import { buttonVariant } from '../../../config/buttonConsts'
import { formTypes } from "../../../config/formTypeConsts"
import ButtonGroup from "../../buttonGroup/ButtonGroup.jsx";

const FormLayout = ({ 
    children, 
    initialValues, 
    validationSchema, 
    onSubmit,
    onCancel = null,
    submitText,
    formType = formTypes.auth,
    isDisabledBtn = false,
}) => {
    const formClass = {
        [formTypes.auth]: styles.auth,
        [formTypes.messages]: styles.messages,
        [formTypes.modal]: styles.modal,
    }[formType] ?? styles.auth

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
            className={styles.form}
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
                />
            </Form>
        </Formik>
    )
}

export default FormLayout
