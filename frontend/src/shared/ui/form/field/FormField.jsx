import { Field, ErrorMessage } from "formik"
import styles from './FormField.module.css'

const FormField = ({
    label, 
    name, 
    type = 'text',
    autoComplete = 'on',
    autoFocus = false
}) => {
    return (
        <div className={styles.formGroup}>
            <Field
                type={type}
                name={name}
                id={name}
                className={styles.fieldClass}
                autoComplete={autoComplete}
                placeholder={label}
                autoFocus={autoFocus}
            />
            <ErrorMessage 
                name={name} 
                component='div'
                className={styles.errorClass}
            />
        </div>
    )
}

export default FormField
