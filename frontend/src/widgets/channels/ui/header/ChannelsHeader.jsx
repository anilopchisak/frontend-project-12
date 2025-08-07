import Button from "../../../../shared/ui/button/Button"
import styles from './ChannelsHeader.module.css'
import { buttonVariant } from "../../../../shared/utils/buttonVariantConsts"

const ChannelsHeader = () => {
    return (
        <div className={styles.header}>
            <h3>Каналы</h3>
            <Button
                variant={buttonVariant.secondary}
            >
                +
            </Button>
        </div>
    )
}

export default ChannelsHeader