import { FC } from 'react'
import CSSButton from './Button.module.css'

type ButtonProps = {
  className?: string
  disabled?: boolean
  onClick?: () => void
}

const Button: FC<ButtonProps> = ({
  disabled,
  children,
  className,
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      className={`${CSSButton.button} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
