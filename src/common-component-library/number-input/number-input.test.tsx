import { render, screen, fireEvent } from '@testing-library/react'
import NumberInput from './number-input'

describe('NumberInput', () => {
  it('renders with label', () => {
    render(<NumberInput label="Age" name="age" />)
    expect(screen.getByLabelText('Age')).toBeInTheDocument()
  })

  it('handles number input', () => {
    const handleChange = jest.fn()
    render(<NumberInput label="Age" name="age" onChange={handleChange} />)
    const input = screen.getByLabelText('Age')
    fireEvent.change(input, { target: { value: '25' } })
    expect(handleChange).toHaveBeenCalled()
  })
}) 