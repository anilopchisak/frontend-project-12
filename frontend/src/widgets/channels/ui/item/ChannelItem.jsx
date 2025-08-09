import styles from './ChannelItem.module.css'
import cn from 'classnames'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Dropdown from 'react-bootstrap/Dropdown'
import { useTranslation } from 'react-i18next'

const ChannelItem = ({channel, isCurrent, onSelect}) => {

    const handleRename = () => {

    }

    const handleDelete =() => {

    }

    const { t } = useTranslation()

    const classesChannel = cn({
        [styles.item]: true,
        [styles.default]: !isCurrent,
        [styles.defaultChannel]: true,
    })

    const classesToggle = cn({
        [styles.item]: true,
        [styles.default]: !isCurrent,
        [styles.defaultToggle]: true,
    })

    const isChangeable = channel.removable === true

    const handleClick = () => {
        onSelect(channel.id)
    }

    return (
        <>
            <Dropdown as={ButtonGroup}>
                <Button variant="primary" onClick={handleClick} className={classesChannel}>
                    <span className={styles.channelName}># {channel.name}</span>
                </Button>
                {isChangeable &&
                    <>
                        <Dropdown.Toggle 
                            split 
                            variant="primary" 
                            id="dropdown-split-primary" 
                            className={classesToggle}
                        />
                        <Dropdown.Menu>
                            <Dropdown.Item 
                                onClick={handleRename}
                            >
                                {t('chat.buttons.renameChannel')}
                            </Dropdown.Item>
                            <Dropdown.Item 
                                onClick={handleDelete}
                            >
                                {t('chat.buttons.deleteChannel')}
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </>
                }
            </Dropdown>

            
        </>
    )
}

export default ChannelItem