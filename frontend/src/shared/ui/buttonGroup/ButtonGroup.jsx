import {useTranslation} from "react-i18next";
import ButtonCustom from '../button/ButtonCustom.jsx'
import styles from './ButtonGroup.module.css'
import {buttonVariant} from "../../config/buttonConsts.js";

const ButtonGroup = ({
     btnCount = 1,
     btnVariant,
     isDisabledBtn,
     submitText,
     onCancel,
    dangerButton = false
 }) => {
    const { t } = useTranslation()

    if (btnCount === 1) {
        return (
            <ButtonCustom variant={btnVariant} disabled={isDisabledBtn}>
                {submitText}
            </ButtonCustom>
        )
    }

    if (btnCount === 2) {
        return (
            <div className={styles.modalButtons}>
                <ButtonCustom
                    type="button"
                    variant={buttonVariant.secondary}
                    onClick={onCancel}
                >
                    {t("chat.buttons.cancel")}
                </ButtonCustom>
                {dangerButton ?
                    <ButtonCustom
                        variant={buttonVariant.danger}
                        type="submit"
                        disabled={isDisabledBtn}
                    >
                        {submitText}
                    </ButtonCustom>
                    :
                    <ButtonCustom
                        variant={buttonVariant.primary}
                        type="submit"
                        disabled={isDisabledBtn}
                    >
                        {submitText}
                    </ButtonCustom>
                }

            </div>
        )
    }

    return null
}

export default ButtonGroup