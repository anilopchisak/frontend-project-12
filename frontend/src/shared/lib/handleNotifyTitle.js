export const handleErrorTitle = (error, t) => {
    switch(error.statusCode) {
        case (401):
            return t('errors.auth.unauthorized')
        case (409):
            return t('errors.auth.conflict')
        case (500):
            return t('errors.serverError')
        default:
            return t('errors.unknown')
    }
}

export const handleMessageTitle = (code, t) => {
    switch(code) {
        case (401):
            return t('errors.auth.unauthorized')
        case (409):
            return t('errors.auth.conflict')
        default:
            return t('errors.unknown')
    }
}
