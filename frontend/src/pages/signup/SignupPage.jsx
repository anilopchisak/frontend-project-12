import { Formik, Form } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { signupValidationSchema } from "../../shared/lib/validation/schemes"
import FormField from "../../shared/ui/form/FormField"
import { useNavigate } from "react-router"
import { registerUser } from "../../features/auth/model/authSlice"

const SignupPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
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
                validationSchema={signupValidationSchema}
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
                    <FormField
                        label='Password confirmation'
                        name='confirmPassword'
                        type='password'
                    />
                    <button type="submit">Submit</button>
                    {error && <div style={{ color: 'red' }}>{error}</div>}
                    {status && <div style={{ color: 'blue' }}>{status}</div>}
                </Form>
            </Formik>
        </div>
    )
}

export default SignupPage