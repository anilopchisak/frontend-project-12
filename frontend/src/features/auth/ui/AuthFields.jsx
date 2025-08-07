import { useTranslation } from "react-i18next"
import FormField from "../../../shared/ui/form/FormField"

const AuthFields = ({ withConfirmPassword = false }) => {
    const { t } = useTranslation()

    return (
        <>
            <FormField 
                label={t('auth.form.username')}
                name='username'
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
        </>
    )
}

export default AuthFields
