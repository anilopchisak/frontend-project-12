import { Formik, Form } from "formik"
import { NavLink } from "react-router"
import { loginValidationSchema } from "../../shared/validation/schemes"
import FormField from "../../shared/ui/form/FormField"

const LoginPage = () => {
    return (
        <div>
            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={() => {
                    console.log('Form is validated! Submitting...')
                    // setSubmitting(false)
                }}
                validationSchema={loginValidationSchema}
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
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
            <NavLink to='/signup'>
                Нет аккаунта? Зарегистрируйтесь
            </NavLink>
        </div>
    )
}

export default LoginPage