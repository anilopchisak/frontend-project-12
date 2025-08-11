import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../../features/auth/model/authSlice'
import { useTranslation } from 'react-i18next'
import styles from './UserControls.module.css'
import Button from '../../../shared/ui/button/Button'

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
            <Button onClick={handleLogout}>
                {t('auth.buttons.logout')}
            </Button>
        </div>
    )
}

export default UserControls