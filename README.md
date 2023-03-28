# Library for custom ink custom inputs

## Usage

---

### Button

#### Default button usage

```jsx
import { Button } from 'ink-inputs/Button'

const App = () => (
    <Button>
        <Text>Lorem, ipsum.</Text>
    </Button>
)
```

#### Custom button usage
```jsx
import React from 'react'
import { Box, Text, TextProps } from 'ink'
import {
    ButtonWrapperProps,
    ButtonContentProps,
    Button,
} from 'ink-inputs/Button'

const CustomButtonWrapper: React.FC<ButtonWrapperProps> = ({
    isFocused,
    children,
}) => {
    const color: TextProps['color'] = isFocused ? 'cyan' : 'red'

    return (
        <Box alignItems='center'>
            <Text color={color}>{`is focused: ${isFocused} `}</Text>
            {children}
        </Box>
    )
}

const CustomButtonContent: React.FC<ButtonContentProps> = ({
    isFocused,
    children,
}) => (
    <Box borderStyle='single'>
        <Text underline={isFocused}>
            {`is focused inside content: ${isFocused} `}
        </Text>
        { children }
    </Box>
)

const App = () => (
    <Button
        wrapperComponent={CustomButtonWrapper}
        contentComponent={CustomButtonContent}
        onClick={() => console.log('clicked')}
    >
        <Text>Lorem, ipsum.</Text>
    </Button>
)
```
