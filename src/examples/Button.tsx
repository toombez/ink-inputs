import React, { useState } from 'react'
import Button, {
    ButtonContentProps,
    ButtonWrapperProps,
} from '../components/Button.js'
import { Box, Text, TextProps } from 'ink'

const CustomButtonWrapper: React.FC<ButtonWrapperProps> = ({
    isFocused,
    children,
}) => {
    const color: TextProps['color'] = isFocused ? 'cyan' : 'blue'

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

const Example: React.FC = () => {
    const [count, setCount] = useState(0)

    return (
        <Box flexDirection='column'>
            <Text>{count}</Text>

            <Button onClick={() => setCount(c => c - 1)}>
                <Text>Remove 1 to count (default button)</Text>
            </Button>

            <Button
                contentComponent={CustomButtonContent}
                wrapperComponent={CustomButtonWrapper}
                onClick={() => setCount(c => c + 1)}
            >
                <Text>Remove 1 to count (custom button)</Text>
            </Button>
        </Box>
    )
}

export default Example
