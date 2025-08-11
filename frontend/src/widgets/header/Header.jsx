import { useSelector } from 'react-redux'
import styles from './Header.module.css'
import UserControls from './ui/UserControls'
import {NavLink} from "react-router";

const Header = () => {
    const {token} = useSelector((state) => state.auth)

    return (
        <header className={styles.container}>
            <div className={styles.header}>
                <h2>
                    <NavLink
                        className={styles.title}
                        to='/'
                    >
                        Hexlet Chat
                    </NavLink>
                </h2>
                {token ?
                    <UserControls/>
                    :
                    null
                }
            </div>
        </header>
    )
}

export default Header
