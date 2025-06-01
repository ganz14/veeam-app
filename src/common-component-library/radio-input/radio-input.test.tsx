import { render, screen, fireEvent } from '@testing-library/react'
import RadioInput from './radio-input'

describe('RadioInput', () => {
  const options = ['Option 1', 'Option 2', 'Option 3']

  it('renders with label and options', () => {
    render(<RadioInput label="Select Option" name="options" values={options} />)
    expect(screen.getByText('Select Option')).toBeInTheDocument()
    options.forEach(option => {
      expect(screen.getByLabelText(option)).toBeInTheDocument()
    })
  })

  it('handles radio selection', () => {
    const handleChange = jest.fn()
    render(<RadioInput label="Select Option" name="options" values={options} onChange={handleChange} />)
    const radio = screen.getByLabelText('Option 1')
    fireEvent.click(radio)
    expect(handleChange).toHaveBeenCalled()
  })

  it('can have a default value', () => {
    render(<RadioInput label="Select Option" name="options" values={options} value="Option 2" />)
    expect(screen.getByLabelText('Option 2')).toBeChecked()
  })
}) 