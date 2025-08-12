import { Field, ErrorMessage } from 'formik'
import styles from './FormField.module.css'
import { useEffect, useRef } from 'react'

const FormField = ({
  label,
  name,
  type = 'text',
  autoComplete = 'on',
  autoFocus = false,
}) => {
  const inputRef = useRef(null)
  const handleFocus = (e) => {
    e.target.select()
  }

  useEffect(() => {
    if (inputRef.current && autoFocus) {
      inputRef.current.focus()
    }
  }, [autoFocus])

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
        onFocus={handleFocus}
        innerRef={inputRef}
      />
      <div className={styles.errorContainer}>
        <ErrorMessage
          name={name}
          component="p"
          className={styles.errorClass}
        />
      </div>

    </div>
  )
}

export default FormField
