import { useSelector } from 'react-redux'
import styles from './Header.module.css'
import Title from '../../shared/ui/title/Title'
import UserControls from './ui/UserControls'

const Header = () => {
    const {token} = useSelector((state) => state.auth)

    return (
        <header className={styles.container}>
            <div className={styles.header}>
                <Title url='/'>HEXLETChat</Title>
                {token ?
                    <UserControls />
                    :
                    null
                }
            </div>
        </header>
    )
}

export default Header
