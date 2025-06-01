import React from 'react'
import css from './number-input.module.less'

type NumberInputProps = {
  label: string
  name: string
  value?: number
  onChange?: (value: number) => void
}

const NumberInput: React.FC<NumberInputProps> = ({
  label,
  name,
  value,
  onChange,
}) => {
  return (
    <div className={css.field}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type="number"
        name={name}
        value={value}
        onChange={(e) => onChange?.(Number(e.target.value))}
      />
    </div>
  )
}

export default NumberInput 