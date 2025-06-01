import { validateAndParseJsonInput } from './parse-validate-json'

describe('validateJsonInput', () => {
  it('should validate correct JSON input', () => {
    const input = JSON.stringify({
      items: [
        { label: 'count', type: 'number' },
        { label: 'name', type: 'string' },
        { label: 'description', type: 'multi-line' },
        { label: 'isActive', type: 'boolean' },
        { label: 'createdAt', type: 'date' },
        { label: 'status', type: 'enum', values: ['active', 'inactive'] }
      ]
    })

    const result = validateAndParseJsonInput(input)
    expect(result.valid).toBe(true)
    if (result.valid) {
      expect(result.items).toHaveLength(6)
    }
  })

  it('should reject invalid JSON syntax', () => {
    const input = '{invalid json'
    const result = validateAndParseJsonInput(input)
    expect(result.valid).toBe(false)
  expect(result.error).toMatch(/Unexpected token|Expected property name/)
  })

  it('should reject missing items array', () => {
    const input = JSON.stringify({})
    const result = validateAndParseJsonInput(input)
    expect(result.valid).toBe(false)
    expect(result.error).toBe('Missing or invalid "items" array')
  })

  it('should reject non-array items', () => {
    const input = JSON.stringify({ items: 'not an array' })
    const result = validateAndParseJsonInput(input)
    expect(result.valid).toBe(false)
    expect(result.error).toBe('Missing or invalid "items" array')
  })

  it('should reject items without label', () => {
    const input = JSON.stringify({
      items: [{ type: 'number' }]
    })
    const result = validateAndParseJsonInput(input)
    expect(result.valid).toBe(false)
    expect(result.error).toBe('Each item must have a string "label"')
  })

  it('should reject items with invalid type', () => {
    const input = JSON.stringify({
      items: [{ label: 'test', type: 'invalid' }]
    })
    const result = validateAndParseJsonInput(input)
    expect(result.valid).toBe(false)
    expect(result.error).toBe('Invalid type: invalid')
  })

  it('should reject enum type without values array', () => {
    const input = JSON.stringify({
      items: [{ label: 'status', type: 'enum' }]
    })
    const result = validateAndParseJsonInput(input)
    expect(result.valid).toBe(false)
    expect(result.error).toBe('"enum" type requires a "values" array')
  })
}) 