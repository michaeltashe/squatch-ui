# SquatchUI

A simple, reusable React component library designed for easy integration into React projects. Built with TypeScript and following best practices similar to MUI and Radix UI.

## Installation

```bash
npm install squatch-ui
```

Or with yarn:

```bash
yarn add squatch-ui
```

## Peer Dependencies

This library requires React 18 or higher:

```json
{
  "peerDependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  }
}
```

## Components

### Button

A versatile button component with multiple variants and sizes.

```tsx
import { Button } from 'squatch-ui';

function App() {
  return (
    <div>
      <Button variant="primary" size="md">Primary Button</Button>
      <Button variant="secondary" size="md">Secondary Button</Button>
      <Button variant="outline" size="md">Outline Button</Button>
      <Button variant="ghost" size="md">Ghost Button</Button>
      
      <Button size="sm">Small Button</Button>
      <Button size="lg">Large Button</Button>
      
      <Button disabled>Disabled Button</Button>
    </div>
  );
}
```

**Props:**
- `variant`: `'primary' | 'secondary' | 'outline' | 'ghost'` (default: `'primary'`)
- `size`: `'sm' | 'md' | 'lg'` (default: `'md'`)
- `children`: React.ReactNode
- All standard HTML button attributes

### TextField

A text input component with label, error states, and helper text support.

```tsx
import { TextField } from 'squatch-ui';

function App() {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState('');

  return (
    <div>
      <TextField
        label="Username"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter your username"
        fullWidth
      />
      
      <TextField
        label="Email"
        error="Invalid email format"
        helperText="We'll never share your email"
        fullWidth
      />
      
      <TextField
        label="Disabled Field"
        disabled
        fullWidth
      />
    </div>
  );
}
```

**Props:**
- `label`: string (optional)
- `error`: string (optional) - displays error message
- `helperText`: string (optional) - displays helper text below input
- `fullWidth`: boolean (default: `false`)
- All standard HTML input attributes

### Radio

A radio button group component with context-based state management.

```tsx
import { RadioGroup, RadioItem } from 'squatch-ui';

function App() {
  const [selectedOption, setSelectedOption] = React.useState('option1');

  return (
    <RadioGroup
      name="options"
      value={selectedOption}
      onChange={setSelectedOption}
    >
      <RadioItem value="option1" label="Option 1" />
      <RadioItem value="option2" label="Option 2" />
      <RadioItem value="option3" label="Option 3" disabled />
    </RadioGroup>
  );
}
```

**RadioGroup Props:**
- `name`: string - name attribute for radio inputs
- `value`: string - currently selected value
- `onChange`: (value: string) => void - change handler
- `children`: React.ReactNode

**RadioItem Props:**
- `value`: string - value for this radio option
- `label`: string - display label
- `disabled`: boolean (default: `false`)

## Development

### Build the library

```bash
npm run build
```

### Watch mode for development

```bash
npm run dev
```

### Type checking

```bash
npm run type-check
```

## Styling

All components use inline styles for maximum flexibility and easy integration into any project. You can customize the appearance by:

1. Using the `style` prop to override default styles
2. Using the `className` prop to apply custom CSS classes
3. Wrapping components in your own styled containers

## TypeScript Support

This library is built with TypeScript and includes full type definitions. All component props are strongly typed for better developer experience.

## License

MIT
