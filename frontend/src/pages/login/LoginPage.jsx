import { useNavigate } from "react-router"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react"
import { useTranslation } from 'react-i18next'
import { loginValidationSchema } from "../../shared/yup/schemes"
import { loginUser } from "../../features/auth/model/authSlice"
import FormLayout from "../../shared/ui/form/layout/FormLayout"
import AuthFields from "../../features/auth/ui/AuthFields"
import Link from '../../shared/ui/link/Link'
import { loadingStatus } from "../../shared/config/statusConsts"
import {showError, showSuccess} from "../../shared/toastify/toast.js";
import {handleErrorTitle} from "../../shared/lib/handleNotifyTitle.js";
import {clearStatus} from "../../features/auth/model/authSlice";

const LoginPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { t } = useTranslation()
    const { token, status, error } = useSelector((state) => state.auth)

    const handleSubmit = (values) => {
        dispatch(loginUser(values))
    }

    useEffect(() => {

    }, [])

    useEffect(() => {
        if (token) {
            showSuccess(t('messages.auth.loginSuccess'))
            navigate('/')
            dispatch(clearStatus())
        }
    }, [token])

    useEffect(() => {
        if (error) {
            const title = handleErrorTitle(error, t)
            showError(title)
            dispatch(clearStatus())
        }
    }, [error])

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