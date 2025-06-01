import React from 'react'
import css from './json-docs.module.less'

const JsonDocs: React.FC = () => {
  return (
    <div className={css.documentation}>
      <h3>How to Write JSON Form Builder Config</h3>
      <p>Your JSON configuration should follow this structure:</p>
      <pre>
        {`{
  "heading": "Form Title",
  "buttons": [
    { "label": "Save" },
    { "label": "Cancel" }
  ],
  "items": [
    {
      "label": "Field Label",
      "type": "'number' | 'string' | 'multi-line' | 'boolean' | 'date' | 'enum'",
      "values": ["Option1", "Option2"]  // for enum fields
    }
  ]
}`}
      </pre>
      <p>Example:</p>
      <pre>
        {`{
  "heading": "User Profile Setup",
  "buttons": [
    { "label": "Save" },
    { "label": "Cancel" }
  ],
  "items": [
    {
      "label": "Age",
      "type": "number"
    },
    {
      "label": "Full Name",
      "type": "string"
    },
    {
      "label": "Biography",
      "type": "multi-line",
    },
    {
      "label": "Birth Date",
      "type": "date"
    },
    {
      "label": "User Role",
      "type": "enum",
      "values": ["Admin", "Editor", "Viewer"]
    },
    {
      "label": "Accept Terms",
      "type": "boolean"
    },
  ]
}`}
      </pre>
    </div>
  )
}

export default JsonDocs
