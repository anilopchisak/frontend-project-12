import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {showError, showSuccess} from "../../../shared/toastify/toast.js";
import {clearStatus} from "../../../features/auth/model/authSlice.js";
import {handleErrorTitle} from "../../../shared/lib/handleNotifyTitle.js";
import {useNavigate} from "react-router";

const useAuthToast = () => {
    const { t } = useTranslation()
    const { token, error,lastAction } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (token) {
            const title = {
                login: t('messages.auth.loginSuccess'),
                signup: t('messages.auth.registerSuccess'),
            }[lastAction]
            showSuccess(title)
            navigate('/')
            dispatch(clearStatus())
        }
    }, [token])

    useEffect(() => {
        if (error) {
            const title = handleErrorTitle(error, t)
            showError(title)
            dispatch(clearStatus())
        }
    }, [error])
}

export default useAuthToast