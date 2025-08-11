import { useDispatch, useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
import { signupValidationSchema } from "../../shared/yup/schemes"
import {registerUser} from "../../features/auth/model/authSlice"
import FormLayout from "../../shared/ui/form/layout/FormLayout"
import AuthFields from "../../features/auth/ui/AuthFields"
import { loadingStatus } from "../../shared/config/statusConsts"
import useAuthToast from "../../widgets/toasts/hooks/useAuthToast.js";

const SignupPage = () => {
    useAuthToast()
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const { status } = useSelector(state => state.auth)

    const handleSubmit = ({username, password}) => {
        dispatch(registerUser({username, password}))
    }

    return (
        <div className='content-container auth-container'>
            <h1>{t('auth.titles.signup')}</h1>
            <FormLayout
                initialValues={{ 
                    username: '', 
                    password: '',
                    confirmPassword: '',
                }}
                onSubmit={handleSubmit}
                validationSchema={() => signupValidationSchema(t)}
                submitText={t('auth.buttons.signup')}
                isDisabledBtn={status === loadingStatus.loading}
            >
                <AuthFields withConfirmPassword='true' />
            </FormLayout>                
        </div>
    )
}

export default SignupPage
