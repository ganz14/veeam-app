export const VALID_FIELD_TYPES = [
    'number',
    'string',
    'multi-line',
    'boolean',
    'date',
    'enum',
  ] as const
  
  export type FieldType = (typeof VALID_FIELD_TYPES)[number]