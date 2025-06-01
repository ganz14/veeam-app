import React from 'react'
import css from './text-input.module.less'

type TextInputProps = {
  label: string
  name: string
  value?: string
  multiline?: boolean
  rows?: number
  onChange?: (value: string) => void
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  name,
  value,
  onChange,
  multiline = false,
  rows = 4,
}) => {
  const InputComponent = multiline ? 'textarea' : 'input'
  const inputProps = multiline ? { rows } : { type: 'text' }

  return (
    <div className={css.field}>
      <label htmlFor={name}>{label}</label>
      <InputComponent
        id={name}
        {...inputProps}
        name={name}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className={css.input}
      />
    </div>
  )
}

export default TextInput 