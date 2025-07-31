import { Formik, Form } from "formik"
import { NavLink, useNavigate } from "react-router"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react"

import { loginValidationSchema } from "../../shared/lib/validation/schemes"
import FormField from "../../shared/ui/form/FormField"
import { loginUser } from "../../features/auth/model/authSlice"
import { loadingStatus } from "../../shared/utils/statusConsts"

const LoginPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { token, status, error } = useSelector((state) => state.auth)

    const handleSubmit = (values) => {
        dispatch(loginUser(values))
    }

    useEffect(() => {
        console.log(token)
        if (token !== null) {
            console.log(token)
            navigate('/')
        }
    }, [token])

    return (
        <div>
            <Formik
                initialValues={{ username: '', password: '' }}
                validationSchema={loginValidationSchema}
                onSubmit={handleSubmit}                
            >
                <Form>
                    <FormField 
                        label='Username'
                        name='username'
                    />
                    <FormField
                        label='Password'
                        name='password'
                        type='password'
                    />
                    <button 
                        type="submit"
                        disabled={status === loadingStatus.loading}
                    >
                        Submit
                    </button>
                    {error && <div style={{ color: 'red' }}>{error}</div>}
                    {status && <div style={{ color: 'blue' }}>{status}</div>}
                </Form>
            </Formik>
            <NavLink to='/signup'>
                Нет аккаунта? Зарегистрируйтесь
            </NavLink>
        </div>
    )
}

export default LoginPage