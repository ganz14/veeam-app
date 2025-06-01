export const sampleJson = {
  heading: 'User Profile Setup',
  items: [
    { label: 'Age', type: 'number' },
    { label: 'Full Name', type: 'string' },
    { label: 'Biography', type: 'multi-line' },
    { label: 'Birth Date', type: 'date' },
    { label: 'User Role', type: 'enum', values: ['Admin', 'Editor', 'Viewer'] },
    { label: 'Accept Terms', type: 'boolean' },
  ],
  buttons: [{ label: 'Save' }, { label: 'Cancel' }],
}
