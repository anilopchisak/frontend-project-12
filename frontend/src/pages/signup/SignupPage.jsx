import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { useNavigate } from "react-router"
import { useTranslation } from "react-i18next"
import { signupValidationSchema } from "../../shared/yup/schemes"
import { registerUser } from "../../features/auth/model/authSlice"
import FormLayout from "../../shared/ui/form/layout/FormLayout"
import AuthFields from "../../features/auth/ui/AuthFields"
import { loadingStatus } from "../../shared/config/statusConsts"

const SignupPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { t } = useTranslation()
    const { token, status, error } = useSelector(state => state.auth)

    const handleSubmit = ({username, password}) => {
        dispatch(registerUser({username, password}))
    }

    useEffect(() => {
        if (token) {
            navigate('/')
        }
    }, [token])

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
                submitText={t('auth.titles.signup')}
                isDisabledBtn={status === loadingStatus.loading}
            >
                <AuthFields withConfirmPassword='true' />
                {error && <div style={{ color: 'red' }}>{error}</div>}
                {/* {status && <div style={{ color: 'blue' }}>{status}</div>} */}
            </FormLayout>                
        </div>
    )
}

export default SignupPage
