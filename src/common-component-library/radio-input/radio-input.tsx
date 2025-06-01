import React, { useState } from 'react'
import css from './radio-input.module.less'

type RadioInputProps = {
  label: string
  name: string
  values: string[]
  value?: string
  onChange?: (value: string) => void
}

const RadioInput: React.FC<RadioInputProps> = ({
  label,
  name,
  values,
  value,
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState(value ?? '')

  return (
    <div className={css.radioGroup}>
      <label className={css.groupLabel}>{label}</label>
      {values.map((optionValue, index) => {
        const optionId = `${optionValue}-${index}`
        return (
          <div key={optionId} className={css.radioOption}>
            <input
              type="radio"
              id={optionId}
              name={name}
              value={optionValue}
              checked={selectedValue === optionValue}
              onChange={(e) => {
                setSelectedValue(e.target.value)
                onChange?.(e.target.value)
              }}
            />
            <label htmlFor={optionId}>{optionValue}</label>
          </div>
        )
      })}
    </div>
  )
}

export default RadioInput
