import { render, screen } from '@testing-library/react'
import CheckboxInput from './checkbox-input'

describe('CheckboxInput', () => {
  it('renders with label', () => {
    render(<CheckboxInput label="Accept terms" name="terms" />)
    expect(screen.getByLabelText('Accept terms')).toBeInTheDocument()
  })
}) 