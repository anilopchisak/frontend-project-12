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
    <div className='mb-3'>
      <label htmlFor={name} hidden>
        {label}
      </label>
      <Field
        type={type}
        name={name}
        id={name}
        placeholder={label}
        className="mb-1 form-control"
        autoComplete={autoComplete}
        onFocus={handleFocus}
        innerRef={inputRef}
      />
      <div className='w-100'>
        <ErrorMessage
          name={name}
          component="div"
          className="text-warning small"
        />
      </div>
    </div>
  )
}

export default FormField
