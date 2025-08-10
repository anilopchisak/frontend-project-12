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

const LoginPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { t } = useTranslation()
    const { token, status, error } = useSelector((state) => state.auth)

    const handleSubmit = (values) => {
        dispatch(loginUser(values))
    }

    useEffect(() => {
        if (token) {
            navigate('/')
        }
    }, [token])

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
                {error && <div style={{ color: 'red' }}>{error}</div>}
                {/* {status && <div style={{ color: 'blue' }}>{status}</div>} */}
            </FormLayout>
            <Link url='/signup'>
                {t('auth.links.signupPrompt')}
            </Link>
        </div>
    )
}

export default LoginPage