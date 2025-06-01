import React from 'react'
import css from './checkbox-input.module.less'

type CheckboxInputProps = {
  label: string
  name: string
  checked?: boolean
  onChange?: (checked: boolean) => void
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({
  label,
  name,
  checked,
  onChange,
}) => {
  return (
    <div className={css.checkboxField}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type="checkbox"
        name={name}
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
      />
    </div>
  )
}

export default CheckboxInput
