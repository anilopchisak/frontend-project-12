import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import resources from '../../../shared/i18n/locales/index.js'

i18n
  .use(initReactI18next) // передаем экземпляр i18n в react-i18next, который сделает его доступным для всех компонентов через context API.
  .init({
    resources, // передаем переводы текстов интерфейса в формате JSON
    fallbackLng: 'ru', // если переводы на языке пользователя недоступны, то будет использоваться язык, указанный в этом поле
    interpolation: {
      escapeValue: false, // экранирование уже есть в React, поэтому отключаем
    },
  })

export default i18n
