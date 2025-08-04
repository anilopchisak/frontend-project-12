import { useTranslation } from "react-i18next"

const NotFoundPage = () => {
    const { t } = useTranslation()
    return (
        <div>
            {t('notFound.elements.text')}
        </div>
    )
}

export default NotFoundPage
