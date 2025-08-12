import styles from './ChannelsHeader.module.css'
import { buttonVariant } from '../../../../shared/config/buttonConsts'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import {lastActionChannels} from '../../../../shared/config/lastActionConsts.js'
import {openModal} from '../../../../features/modal/model/modalSlice.js'
import ButtonCustom from '../../../../shared/ui/button/ButtonCustom.jsx'

const ChannelsHeader = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const handleOpenAddModal = () => {
    dispatch(openModal({
      type: lastActionChannels.create,
      props: {
        title: t('chat.titles.addChannel')
      }
    }))
  }

  return (
    <>
      <div className={styles.header}>
        <h3>Каналы</h3>
        <ButtonCustom
          variant={buttonVariant.icon}
          onClick={handleOpenAddModal}
          type="button"
        >
          +
        </ButtonCustom>
      </div>
    </>
  )
}

export default ChannelsHeader