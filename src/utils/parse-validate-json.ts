import { VALID_FIELD_TYPES } from '../const/json-form-constants'
import { Item, Button } from '../types/form'

type ValidationResult = {
    valid: boolean;
    items?: Item[];
    heading?: string;
    buttons?: Button[];
    error?: string
}

export function validateAndParseJsonInput(input: string): ValidationResult {
  try {
    const parsed = JSON.parse(input)

    if (!parsed.items || !Array.isArray(parsed.items)) {
      return { valid: false, error: 'Missing or invalid "items" array' }
    }

    // Optional heading
    if (parsed.heading && typeof parsed.heading !== 'string') {
      return { valid: false, error: '"heading" must be a string' }
    }

    // Optional buttons
    if (parsed.buttons) {
      if (!Array.isArray(parsed.buttons)) {
        return { valid: false, error: '"buttons" must be an array' }
      }
      for (const btn of parsed.buttons) {
        if (!btn.label || typeof btn.label !== 'string') {
          return { valid: false, error: 'Each button must have a string "label"' }
        }
        if (btn.action && typeof btn.action !== 'string') {
          return { valid: false, error: 'Button "action" must be a string' }
        }
      }
    }

    for (const item of parsed.items) {
      if (!item.label || typeof item.label !== 'string') {
        return { valid: false, error: 'Each item must have a string "label"' }
      }
      if (!VALID_FIELD_TYPES.includes(item.type)) {
        return { valid: false, error: `Invalid type: ${item.type}` }
      }
      if (item.type === 'enum' && !Array.isArray(item.values)) {
        return { valid: false, error: `"enum" type requires a "values" array` }
      }
    }

    return { valid: true, items: parsed.items, heading: parsed.heading, buttons: parsed.buttons }
  } catch (err: unknown) {
    return {
      valid: false,
      error: err instanceof Error ? err.message : 'Unknown error',
    }
  }
}
