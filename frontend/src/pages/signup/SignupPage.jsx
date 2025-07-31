import { Formik, Form } from "formik"
import { signupValidationSchema } from "../../shared/lib/validation/schemes"
import FormField from "../../shared/ui/form/FormField"

const SignupPage = () => {
    return (
        <div>
            <Formik
                initialValues={{ 
                    username: '', 
                    password: '',
                    confirmPassword: '',
                }}
                onSubmit={() => {
                    console.log('Form is validated! Submitting...')
                    // setSubmitting(false)
                }}
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
                </Form>
            </Formik>
        </div>
    )
}

export default SignupPage