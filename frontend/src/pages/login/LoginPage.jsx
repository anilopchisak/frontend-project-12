import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { loginValidationSchema } from "../../shared/yup/schemes"
import { loginUser } from "../../features/auth/model/authSlice"
import FormLayout from "../../shared/ui/form/layout/FormLayout"
import AuthFields from "../../features/auth/ui/AuthFields"
import Link from '../../shared/ui/link/Link'
import { loadingStatus } from "../../shared/config/statusConsts"
import useAuthToast from "../../widgets/toasts/hooks/useAuthToast.js";

const LoginPage = () => {
    const { status } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const { t } = useTranslation()
    useAuthToast()

    const handleSubmit = (values) => {
        dispatch(loginUser(values))
    }

    return (
        <div className='content-container auth-container'>
            <h1>{t('auth.titles.login')}</h1>
            <FormLayout
                initialValues={{ username: '', password: '' }}
                validationSchema={() => loginValidationSchema(t)}
                onSubmit={handleSubmit} 
                submitText={t('auth.titles.login')}
                isDisabledBtn={status === loadingStatus.loading}
            >
                <AuthFields />
            </FormLayout>
            <Link url='/signup'>
                {t('auth.links.signupPrompt')}
            </Link>
        </div>
    )
}

export default LoginPage