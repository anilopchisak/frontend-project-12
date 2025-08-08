// import Button from '../../../../shared/ui/button/Button'
// import { buttonVariant } from '../../../../shared/utils/buttonConsts'
import styles from './ChannelItem.module.css'
// import { IoIosArrowDown } from "react-icons/io"
import cn from 'classnames'
import Dropdown from 'react-bootstrap/Dropdown'

const ChannelItem = ({channel, isActive, onSelect}) => {
    const classes = cn({
        [styles.itemContainer]: true,
        [styles.selected]: isActive,
    })
    // const btnVariant = isActive 
    //     ? buttonVariant.secondaryLight 
    //     : buttonVariant.secondaryDark

    const isChangeable = channel.removable === true

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
            {/* {isChangeable &&
                <DropdownButton id="dropdown-basic-button" title="">
                    <Dropdown.Item href="#/action-1">Rename</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
                </DropdownButton>
            } */}
        </div>
    )
}

export default ChannelItem