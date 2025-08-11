import { Field, ErrorMessage } from "formik"
import styles from './FormField.module.css'

const FormField = ({
    label, 
    name,
    type = 'text',
    autoComplete = 'on',
    autoFocus = false,
}) => {
    const handleFocus = (e) => {
        e.target.select()
    }

    return (
        <div className={styles.formGroup}>
            <label htmlFor={name} hidden>
                {label}
            </label>
            <Field
                type={type}
                name={name}
                id={name}
                placeholder={label}
                className={styles.fieldClass}
                autoComplete={autoComplete}
                autoFocus={autoFocus}
                onFocus={handleFocus}
            />
            <div className={styles.errorContainer}>
                <ErrorMessage
                    name={name}
                    component='p'
                    className={styles.errorClass}
                />
            </div>

        </div>
    )
}

export default FormField
