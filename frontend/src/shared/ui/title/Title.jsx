import { NavLink } from 'react-router'
import styles from './Title.module.css'

const Title = ({children, url = null}) => {
    if (url) {
        return (
            <h2>
                <NavLink 
                    className={styles.title} 
                    to={url}
                >
                    {children}
                </NavLink>
            </h2>
        )
    }
    return <h2 className={styles.title}>{children}</h2>
}

export default Title
