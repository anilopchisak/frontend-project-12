import styles from './Button.module.css'
import { buttonVariant } from '../../config/buttonConsts'
import cn from 'classnames'

const variantClasses = {
    [buttonVariant.primary]: styles.primary,
    [buttonVariant.primaryWide]: cn(styles.primary, styles.w100),
    [buttonVariant.secondary]: styles.secondary,
    [buttonVariant.icon]: cn(styles.secondary, styles.icon),
}

const Button = ({
    children, 
    variant = buttonVariant.primary, 
    onClick, 
    type = 'submit',
    disabled = false
}) => {
    return (
        <button 
            className={variantClasses[variant]} 
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button
