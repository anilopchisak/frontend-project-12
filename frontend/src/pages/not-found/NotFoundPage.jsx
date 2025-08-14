import { useTranslation } from 'react-i18next'

const NotFoundPage = () => {
  const { t } = useTranslation()
  return (
    <div className="p-5 rounded-5 bg-white fw-bold">
      {t('notFound.title')}
    </div>
  )
}

export default NotFoundPage
