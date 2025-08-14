import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Dropdown from 'react-bootstrap/Dropdown'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { openModal } from '../../../../features/modal/model/modalSlice.js'
import { lastActionChannels } from '../../../../shared/config/lastActionConsts.js'
import ButtonCustom from '../../../../shared/ui/button/ButtonCustom.jsx'
import { buttonVariant } from '../../../../shared/config/buttonConsts.js'

const ChannelItem = ({ channel, isCurrent, onSelect }) => {
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const variant = isCurrent ? buttonVariant.primary : buttonVariant.light

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
        <ButtonCustom variant={variant} onClick={handleChangeChannel} classes="w-50 text-truncate text-nowrap text-start">
          <span aria-hidden="true">#</span>
          {channel.name}
        </ButtonCustom>
        {isRemovable
          && (
            <>
              <Dropdown.Toggle
                split
                variant={variant}
                id="dropdown-split"
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
          )}
      </Dropdown>
    </>
  )
}

export default ChannelItem
