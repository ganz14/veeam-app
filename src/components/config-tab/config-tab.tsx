import React, { useState } from 'react'
import clsx from 'clsx'
import css from './config-tab.module.less'
import { validateAndParseJsonInput } from '../../utils/parse-validate-json'
import { sampleJson } from '../../const/sample-json'
import { ValidatedForm } from '../../types/form'
import JsonDocs from '../json-docs/json-docs'

type ConfigTabProps = {
  onValidSchema: (data: ValidatedForm) => void
  setActiveTab: (i: number) => void
}

const ConfigTab: React.FC<ConfigTabProps> = ({
  onValidSchema,
  setActiveTab,
}) => {
  const [jsonInput, setJsonInput] = useState<string>(
    JSON.stringify(sampleJson, null, 2)
  )
  const [isValid, setIsValid] = useState(true)
  const [jsonError, setJsonError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setJsonInput(value)
  }

  const handleApply = () => {
    const result = validateAndParseJsonInput(jsonInput)

    if (result.valid) {
      setIsValid(true)
      setJsonError(null)
      onValidSchema({
        items: result.items ?? [],
        heading: result.heading,
        buttons: result.buttons,
      })
      setActiveTab(1)
    } else {
      setIsValid(false)
      setJsonError(result.error ?? null)
      onValidSchema({ items: [] })
    }
  }

  return (
    <>
      <div className={css.container}>
        <h3 className={css.title}>JSON Form Builder Config</h3>
        <div className={css.inputContainer}>
          <textarea
            rows={10}
            cols={60}
            value={jsonInput}
            onChange={handleChange}
            className={clsx(css.textarea, {
              [css.invalid]: !isValid,
            })}
          />
          {!isValid && (
            <div className={css.errorContainer}>
              <p className={css.error}>Invalid JSON format!</p>
              {jsonError && <p className={css.error}>{jsonError}</p>}
            </div>
          )}
        </div>

        <div>
          <button className={css.applyButton} onClick={handleApply}>
            Apply
          </button>
        </div>
      </div>
      <div className={css.footer}>
        <JsonDocs />
      </div>
    </>
  )
}

export default ConfigTab
