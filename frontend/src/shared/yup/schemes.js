import * as Yup from 'yup'

export const loginValidationSchema = (t) => {
  return Yup.object({
    username: Yup.string().required(t('auth.yup.required')),
    password: Yup.string().required(t('auth.yup.required')),
  })
}

export const signupValidationSchema = (t) => {
  return Yup.object({
    username: Yup.string()
      .required(t('auth.yup.required'))
      .min(3, t('auth.yup.username.min'))
      .max(20, t('auth.yup.username.max')),
    password: Yup.string()
      .required(t('auth.yup.required'))
      .min(6, t('auth.yup.password.min'))
      .matches(/[a-zA-Z]/, t('auth.yup.password.containLetter'))
      .matches(/\d/, t('auth.yup.password.containNumber')),
    confirmPassword: Yup.string()
      .required(t('auth.yup.required'))
      .oneOf([Yup.ref('password'), null], t('auth.yup.confirmPassword.mustMatch')),
  })
}