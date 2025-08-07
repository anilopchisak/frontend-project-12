import { useState } from 'react'
import Button from '../../../../shared/ui/button/Button'
import { buttonVariant } from '../../../../shared/utils/buttonVariantConsts'
import styles from './ChannelItem.module.css'
import { IoIosArrowDown } from "react-icons/io"
import cn from 'classnames'

const ChannelItem = ({name}) => {
    const [selected, setSelected] = useState(false)

    const classes = cn({
        [styles.itemContainer]: true,
        [styles.selected]: selected,
    })

    return (
        <div 
            className={classes} 
            onClick={() => setSelected(prev => !prev)}
        >
            <p className={styles.channelName}>
                # {name}
            </p>
            <Button 
                variant={selected ? buttonVariant.secondaryLight : buttonVariant.secondaryDark}
            >
                <IoIosArrowDown />
            </Button>
        </div>
    )
}

export default ChannelItem