import Button from '../../../../shared/ui/button/Button'
import { buttonVariant } from '../../../../shared/utils/buttonVariantConsts'
import styles from './ChannelItem.module.css'
import { IoIosArrowDown } from "react-icons/io"
import cn from 'classnames'

const ChannelItem = ({channel, isActive, onSelect}) => {
    const classes = cn({
        [styles.itemContainer]: true,
        [styles.selected]: isActive,
    })
    const btnVariant = isActive 
        ? buttonVariant.secondaryLight 
        : buttonVariant.secondaryDark

    const isChangeable = channel.id === 0 || channel.id === 1

    const handleClick = () => {
        onSelect(channel.id)
    }

    return (
        <div 
            className={classes} 
            onClick={handleClick}
        >
            <p className={styles.channelName}>
                # {channel.name}
            </p>
            {isChangeable &&
                <Button 
                    variant={btnVariant}
                >
                    <IoIosArrowDown />
                </Button>
            }
        </div>
    )
}

export default ChannelItem