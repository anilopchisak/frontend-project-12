import { buttonVariant } from '../../config/buttonConsts'
import Button from 'react-bootstrap/Button'
import cn from 'classnames'
import styles from './ButtonCustom.module.css'

const variantClasses = {
    [buttonVariant.primary]: 'btn btn-primary',
    [buttonVariant.primaryWide]: 'btn btn-primary btn-lg btn-block',
    [buttonVariant.secondary]: 'btn btn-outline-primary',
    [buttonVariant.icon]: cn('btn', 'btn-link', styles.icon),
    [buttonVariant.danger]: 'btn btn-danger',
}

const ButtonCustom = ({
    children, 
    variant = buttonVariant.primary,
    onClick, 
    type = 'submit',
    disabled = false
}) => {
    return (
        <Button
            className={variantClasses[variant]} 
            onClick={onClick}
            type={type}
            disabled={disabled}
            variant={null}
        >
            {children}
        </Button>
    )
}

export default ButtonCustom
