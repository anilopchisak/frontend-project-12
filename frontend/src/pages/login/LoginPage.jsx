import { Formik, Form } from "formik"
import { NavLink, useNavigate } from "react-router"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react"
import { useTranslation } from 'react-i18next'

import { loginValidationSchema } from "../../shared/yup/schemes"
import FormField from "../../shared/ui/form/FormField"
import { loginUser } from "../../features/auth/model/authSlice"
import { loadingStatus } from "../../shared/utils/statusConsts"

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
        <div>
            <Formik
                initialValues={{ username: '', password: '' }}
                validationSchema={() => loginValidationSchema(t)}
                onSubmit={handleSubmit}                
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
                    <button 
                        type="submit"
                        disabled={status === loadingStatus.loading}
                    >
                        {t('auth.elements.loginText')}
                    </button>
                    {error && <div style={{ color: 'red' }}>{error}</div>}
                    {status && <div style={{ color: 'blue' }}>{status}</div>}
                </Form>
            </Formik>
            <NavLink to='/signup'>
                {t('auth.elements.signupLink')}
            </NavLink>
        </div>
    )
}

export default LoginPage