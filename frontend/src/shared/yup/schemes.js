import * as Yup from 'yup'
import store from '../../app/providers/store/store.js'

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
      .min(3, t('auth.yup.username.minMax'))
      .max(20, t('auth.yup.username.minMax')),
    password: Yup.string()
      .required(t('auth.yup.required'))
      .min(6, t('auth.yup.password.min')),
    confirmPassword: Yup.string()
      .required(t('auth.yup.required'))
      .oneOf([Yup.ref('password'), null], t('auth.yup.confirmPassword.mustMatch')),
  })
}

export const newChannelNameValidationSchema = (t) => {
  return Yup.object({
    name: Yup.string()
      .required(t('auth.yup.required'))
      .min(3, t('auth.yup.username.minMax'))
      .max(20, t('auth.yup.username.minMax'))
      .test('unique', t('chat.yup.channelExists'), function (value) {
        const channels = store.getState().channels.entities
        const channelNames = Object.values(channels).map((c) => c.name.toLowerCase())
        return !channelNames.includes(value.trim().toLowerCase())
      }),
  })
}
