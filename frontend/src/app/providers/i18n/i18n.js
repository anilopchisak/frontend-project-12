import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import resources from '../../../shared/i18n/locales/index.js'

i18n
  .use(initReactI18next)
  .init({
    lng: 'ru',
    resources,
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
