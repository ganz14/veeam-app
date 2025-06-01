import React from 'react'
import css from './date-input.module.less'

type DateInputProps = {
  label: string
  name: string
  value?: string
  onChange?: (value: string) => void
}

const DateInput: React.FC<DateInputProps> = ({
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
        type="date"
        name={name}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  )
}

export default DateInput 