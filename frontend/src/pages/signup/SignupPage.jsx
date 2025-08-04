import { Formik, Form } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { useNavigate } from "react-router"
import { useTranslation } from "react-i18next"
import { signupValidationSchema } from "../../shared/yup/schemes"
import FormField from "../../shared/ui/form/FormField"
import { registerUser } from "../../features/auth/model/authSlice"


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
        <div>
            <Formik
                initialValues={{ 
                    username: '', 
                    password: '',
                    confirmPassword: '',
                }}
                onSubmit={handleSubmit}
                validationSchema={() => signupValidationSchema(t)}
            >
                <Form>
                    <FormField 
                        label={t('auth.elements.username')}
                        name='username'
                    />
                    <FormField
                        label={t('auth.elements.password')}
                        name='password'
                        type='password'
                    />
                    <FormField
                        label={t('auth.elements.passwordConfirm')}
                        name='confirmPassword'
                        type='password'
                    />
                    <button type="submit">
                        {t('auth.elements.signupText')}
                    </button>
                    {error && <div style={{ color: 'red' }}>{error}</div>}
                    {status && <div style={{ color: 'blue' }}>{status}</div>}
                </Form>
            </Formik>
        </div>
    )
}

export default SignupPage
