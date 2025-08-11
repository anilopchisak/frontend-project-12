import { useTranslation } from "react-i18next"
import FormField from "../../../shared/ui/form/field/FormField"
import styles from './AuthFields.module.css'

const AuthFields = ({ withConfirmPassword = false }) => {
    const { t } = useTranslation()

    return (
        <div className={styles.form}>
            <FormField 
                label={
                    withConfirmPassword
                        ? t('auth.form.username')
                        : t('auth.form.userNick')
                }
                name='username'
                autoFocus={true}
            />
            <FormField
                label={t('auth.form.password')}
                name='password'
                type='password'
            />
            {withConfirmPassword && (
                <FormField
                    label={t('auth.form.confirmPassword')}
                    name='confirmPassword'
                    type='password'
                />
            )}
        </div>
    )
}

export default AuthFields
