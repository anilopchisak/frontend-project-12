import { Formik, Form } from "formik"
import Button from '../button/Button'
import styles from './FormLayout.module.css'
import { buttonVariant } from '../../utils/buttonVariantConsts'

const FormLayout = ({ 
    children, 
    initialValues, 
    validationSchema, 
    onSubmit,
    submitText,
    btnVariant = buttonVariant.primary
}) => {
    const classes = btnVariant === buttonVariant.primary 
    ? styles.auth
    : styles.messages

    return (
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            className={styles.form}
        >
            <Form className={classes}>
                {children}
                <Button variant={btnVariant}>
                    {submitText}
                </Button>
            </Form>
        </Formik>
    )
}

export default FormLayout
