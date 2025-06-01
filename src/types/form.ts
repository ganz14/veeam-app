export type FieldType = 'number' | 'string' | 'multi-line' | 'boolean' | 'date' | 'enum'

export type Item = {
  label: string
  type: FieldType
  values?: string[]
}

export type Button = {
  label: string
  action?: string // optional, can extend this later
}

export type ValidatedForm = {
  heading?: string
  buttons?: Button[]
  items: Item[]
} 