import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {useEffect} from "react";
import {lastActionChannels} from "../../../shared/config/lastActionConsts.js";
import {loadingStatus} from "../../../shared/config/statusConsts.js";
import {showError, showSuccess} from "../../../shared/toastify/toast.js";
import {handleErrorTitle} from "../../../shared/lib/handleNotifyTitle.js";

const useChannelToast = () => {
    const { lastAction, error, status } = useSelector(state => state.channels)
    const { t } = useTranslation()

    useEffect(() => {
        if (status === loadingStatus.succeeded) {
            switch (lastAction) {
                case lastActionChannels.create:
                    showSuccess(t('messages.channel.created'))
                    break
                case lastActionChannels.rename:
                    showSuccess(t('messages.channel.renamed'))
                    break
                case lastActionChannels.delete:
                    showSuccess(t('messages.channel.deleted'))
                    break
                default:
                    break
            }
        }
    }, [lastAction, status, t])

    useEffect(() => {
        if (error) {
            const title = handleErrorTitle(error, t)
            showError(title)
        }
    }, [error])

}

export default useChannelToast