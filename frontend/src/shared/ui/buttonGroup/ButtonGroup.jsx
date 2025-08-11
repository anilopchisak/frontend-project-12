import {useTranslation} from "react-i18next";
import Button from '../button/Button'
import styles from './ButtonGroup.module.css'

const ButtonGroup = ({
     btnCount = 1,
     btnVariant,
     isDisabledBtn,
     submitText,
     onCancel
 }) => {
    const { t } = useTranslation()

    if (btnCount === 1) {
        return (
            <Button variant={btnVariant} disabled={isDisabledBtn}>
                {submitText}
            </Button>
        )
    }

    if (btnCount === 2) {
        return (
            <div className={styles.modalButtons}>
                <Button
                    type="button"
                    variant={btnVariant.cancel}
                    onClick={onCancel}
                >
                    {t("chat.buttons.cancel")}
                </Button>
                <Button
                    variant={btnVariant.submit}
                    type="submit"
                    disabled={isDisabledBtn}
                >
                    {submitText}
                </Button>
            </div>
        )
    }

    return null
}

export default ButtonGroup