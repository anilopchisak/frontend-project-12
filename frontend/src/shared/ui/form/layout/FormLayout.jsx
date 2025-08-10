import { Formik, Form } from "formik"
import Button from '../../button/Button'
import styles from './FormLayout.module.css'
import { buttonVariant } from '../../../config/buttonConsts'
import { formTypes } from "../../../config/formTypeConsts"
import { useTranslation } from "react-i18next"

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

    const { t } = useTranslation()

    return (
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            className={styles.form}
        >
            <Form className={formClass}>
                {children}
                {btnCount === 1 &&
                   <Button variant={btnVariant} disabled={isDisabledBtn}>
                        {submitText}
                    </Button> 
                }
                {btnCount === 2 &&
                    <div className={styles.modalButtons}>
                        <Button 
                            type='button'
                            variant={btnVariant.cancel} 
                            onClick={onCancel}
                        >
                            {t('chat.buttons.cancel')}
                        </Button>
                        <Button
                            variant={btnVariant.submit}
                            type='submit'
                            disabled={isDisabledBtn}
                        >
                            {t('chat.buttons.send')}
                        </Button>
                    </div>
                }
            </Form>
        </Formik>
    )
}

export default FormLayout
