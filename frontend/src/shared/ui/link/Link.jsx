import { NavLink } from 'react-router'
import styles from './Link.module.css'

const Link = ({children, url}) => {
    return (
        <NavLink 
            className={styles.link} 
            to={url}
        >
            {children}
        </NavLink>
    )
}

export default Link