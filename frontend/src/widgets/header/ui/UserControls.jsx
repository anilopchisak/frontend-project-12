import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../../features/auth/model/authSlice'
import { useTranslation } from 'react-i18next'
import styles from './UserControls.module.css'
import ButtonCustom from '../../../shared/ui/button/ButtonCustom.jsx'

const UserControls = () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.auth)

    const handleLogout = () => {
        dispatch(logout())
    }
    return (
        <div className={styles.authControls}>
            <p className={styles.username}>{user}</p>
            <ButtonCustom onClick={handleLogout}>
                {t('auth.buttons.logout')}
            </ButtonCustom>
        </div>
    )
}

export default UserControls