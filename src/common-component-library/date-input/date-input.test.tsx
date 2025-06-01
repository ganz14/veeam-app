import { render, screen } from '@testing-library/react'
import DateInput from './date-input'

describe('DateInput', () => {
  it('renders with label', () => {
    render(<DateInput label="Birth Date" name="birthDate" />)
    expect(screen.getByLabelText('Birth Date')).toBeInTheDocument()
  })
}) 