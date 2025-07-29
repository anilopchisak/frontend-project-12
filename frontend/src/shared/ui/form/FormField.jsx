import { Field, ErrorMessage } from "formik"

const FormField = ({
    label, 
    name, 
    type = 'text',
    autoComplete = 'on',
    fieldClass = 'form-control',
    errorClass = 'invalid-feedback'
}) => {
    return (
        <div className='form-group'>
            <label htmlFor={name}>{label}</label>
            <Field
                type={type}
                name={name}
                id={name}
                className={fieldClass}
                autoComplete={autoComplete}
            />
            <ErrorMessage 
                name={name} 
                component='div'
                className={errorClass}
            />
        </div>
    )
}

export default FormField
