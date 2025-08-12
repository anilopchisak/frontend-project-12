import styles from './ChannelItem.module.css'
import cn from 'classnames'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Dropdown from 'react-bootstrap/Dropdown'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { openModal } from '../../../../features/modal/model/modalSlice.js'
import { lastActionChannels } from '../../../../shared/config/lastActionConsts.js'

const ChannelItem = ({ channel, isCurrent, onSelect }) => {
  const dispatch = useDispatch()
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

  const isRemovable = channel.removable

  const openRenameModal = () => {
    dispatch(openModal({
      type: lastActionChannels.rename,
      props: {
        title: t('chat.titles.renameChannel'),
        id: channel.id,
        name: channel.name,
      },
    }))
  }

  const openDeleteModal = () => {
    dispatch(openModal({
      type: lastActionChannels.delete,
      props: {
        title: t('chat.titles.deleteChannel'),
        id: channel.id,
      },
    }))
  }

  const handleChangeChannel = () => {
    onSelect(channel.id)
  }

  return (
    <>
      <Dropdown as={ButtonGroup}>
        <Button variant="primary" onClick={handleChangeChannel} className={classesChannel}>
          <span aria-hidden="true">#</span>{channel.name}
        </Button>
        {isRemovable &&
        <>
          <Dropdown.Toggle
            split
            variant="primary"
            id="dropdown-split-primary"
            className={classesToggle}
          >
            <span className="visually-hidden">{t('chat.channelManage')}</span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              onClick={openRenameModal}
            >
              {t('chat.buttons.renameChannel')}
            </Dropdown.Item>
            <Dropdown.Item
              onClick={openDeleteModal}
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
