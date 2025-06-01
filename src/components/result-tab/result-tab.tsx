import React from 'react'
import css from './result-tab.module.less'
import { ValidatedForm } from '../../types/form'
import NumberInput from '../../common-component-library/number-input/number-input'
import TextInput from '../../common-component-library/text-input/text-input'
import CheckboxInput from '../../common-component-library/checkbox-input/checkbox-input'
import DateInput from '../../common-component-library/date-input/date-input'
import RadioInput from '../../common-component-library/radio-input/radio-input'
import Button from '../../common-component-library/button/button'

type BaseComponentProps = {
  name: string
  label: string
}

type ComponentMap = {
  number: typeof NumberInput
  string: typeof TextInput
  'multi-line': (props: BaseComponentProps) => React.ReactElement
  boolean: typeof CheckboxInput
  date: typeof DateInput
  enum: typeof RadioInput
}

const componentMap: ComponentMap = {
  number: NumberInput,
  string: TextInput,
  'multi-line': (props: BaseComponentProps) => (
    <TextInput {...props} multiline />
  ),
  boolean: CheckboxInput,
  date: DateInput,
  enum: RadioInput,
}

const ResultTab: React.FC<ValidatedForm> = ({ items, heading, buttons }) => {
  if (!items.length) {
    return <p>No fields available. Please apply a valid config.</p>
  }

  return (
    <form className={css.form}>
      {heading && <h2 className={css.heading}>{heading}</h2>}

      {items.map((item, index) => {
        const id = `field-${index}`
        const Component = componentMap[item.type as keyof ComponentMap]

        if (!Component) {
          return (
            <div key={id} className={css.field}>
              <p>Unsupported field type: {item.type}</p>
            </div>
          )
        }

        if (item.type === 'enum') {
          return (
            <RadioInput
              key={id}
              name={item.label}
              label={item.label}
              values={item.values || []}
            />
          )
        }

        const BaseComponent = Component as React.ComponentType<BaseComponentProps>
        return <BaseComponent key={id} name={item.label} label={item.label} />
      })}

      {buttons && buttons.length > 0 && (
        <div className={css.buttonGroup}>
          {buttons.map((btn, index) => (
            <Button
              key={index}
              label={btn.label}
              onClick={() => {
                console.log(`Button clicked: ${btn.label}`) // TODO: handle custom actions
              }}
            />
          ))}
        </div>
      )}
    </form>
  )
}

export default ResultTab
