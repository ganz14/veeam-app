import React from 'react'
import css from './button.module.less'

type ButtonProps = {
  label: string
  onClick?: () => void
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className={css.button}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

export default Button 