import { buttonVariant } from '../../config/buttonConsts'
import Button from 'react-bootstrap/Button'

const variantClasses = {
  [buttonVariant.primary]: 'btn btn-primary',
  [buttonVariant.primaryWide]: 'btn btn-primary btn-lg btn-block',
  [buttonVariant.secondary]: 'btn btn-outline-primary',
  [buttonVariant.icon]: 'btn btn-link',
  [buttonVariant.danger]: 'btn btn-danger',
  [buttonVariant.light]: 'btn btn-light',
}

const ButtonCustom = ({
  children,
  variant = buttonVariant.primary,
  onClick,
  type = 'submit',
  disabled = false,
  classes = null,
}) => {
  return (
    <Button
      className={`${variantClasses[variant]} ${classes}`}
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
