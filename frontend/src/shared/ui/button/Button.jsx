import styles from './Button.module.css'
import cn from 'classnames'
import { buttonVariant } from '../../utils/buttonVariantConsts'

const Button = ({children, onClick, variant = buttonVariant.primary, type = 'submit'}) => {
    const classes = cn({
        [styles.button]: true,
        [styles.primary]: variant === buttonVariant.primary,
        [styles.secondary]: variant !== buttonVariant.primary,
        [styles.secondaryBasic]: variant === buttonVariant.secondary,
        [styles.secondaryLight]: variant === buttonVariant.secondaryLight,
        [styles.secondaryDark]: variant === buttonVariant.secondaryDark,
    })
    return (
        <button 
            className={classes} 
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    )
}

export default Button