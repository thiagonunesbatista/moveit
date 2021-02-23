import { FC } from 'react'
import CSSButton from './Button.module.css'

type ButtonProps = {
  onClick?: () => void
}

const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={CSSButton.button}>
      {children}
    </button>
  )
}

export default Button
