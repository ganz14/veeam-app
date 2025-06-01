import { render, screen, fireEvent } from '@testing-library/react'
import TextInput from './text-input'

describe('TextInput', () => {
  it('renders with label', () => {
    render(<TextInput label="Username" name="username" />)
    expect(screen.getByLabelText('Username')).toBeInTheDocument()
  })

  it('handles input change', () => {
    const handleChange = jest.fn()
    render(<TextInput label="Username" name="username" onChange={handleChange} />)
    const input = screen.getByLabelText('Username')
    fireEvent.change(input, { target: { value: 'testuser' } })
    expect(handleChange).toHaveBeenCalled()
  })

  it('renders with multiline prop', () => {
    render(<TextInput label="Description" name="description" multiline />)
    expect(screen.getByLabelText('Description')).toHaveAttribute('rows')
  })
}) 