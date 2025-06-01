# 🛠️ Dynamic JSON Form Builder

This project allows you to dynamically generate forms using a JSON configuration. You can define:
- A form heading
- A set of fields (text, number, checkbox, date, etc.)
- Action buttons like "Submit", "Cancel", etc.

---

## JSON Config Format

Your configuration must follow this structure:

```json
{
  "heading": "Form Title",
  "buttons": [
    { "label": "Submit" },
    { "label": "Cancel" }
  ],
  "items": [
    {
      "label": "Field Label",
      "type": "field-type"
    }
  ]
}
```

---

## 🚀 Tech Stack

This project is built with:
- React + TypeScript
- Vite for fast development and building
- LESS for styling
- ESLint for code quality
