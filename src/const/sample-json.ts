export const sampleJson = {
  heading: 'User Profile Setup',
  buttons: [{ label: 'Save' }, { label: 'Cancel' }],
  items: [
    { label: 'Age', type: 'number' },
    { label: 'Full Name', type: 'string' },
    { label: 'Biography', type: 'multi-line' },
    { label: 'Accept Terms', type: 'boolean' },
    { label: 'Birth Date', type: 'date' },
    { label: 'User Role', type: 'enum', values: ['Admin', 'Editor', 'Viewer'] },
  ],
}
