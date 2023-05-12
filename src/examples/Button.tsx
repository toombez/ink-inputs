import React, { useState } from 'react'
import Button from '../components/Button.js'
import { Box, Text } from 'ink'

const Example: React.FC = () => {
    const [count, setCount] = useState(0)

    function onClick() {
        setCount((c) => c + 1)
    }

    return (
        <Box flexDirection='column'>
            <Text>Counts: {count}</Text>

            <Button onClick={onClick}>
                <Text>1. just children</Text>
            </Button>

            <Button onClick={onClick}>
                {({ isFocused }) => (
                    <Text underline={isFocused}>2. render in children</Text>
                )}
            </Button>

            <Button
                onClick={onClick}
                render={({ isFocused }) => (
                    <Box
                        borderStyle='round'
                        borderColor={isFocused ? 'cyan' : 'green'}
                    >
                        <Text>
                            3. render function
                        </Text>
                    </Box>
                )}
            />

            <Button
                onClick={onClick}
                render={({ isFocused, children }) => (
                    <Box
                        borderStyle='round'
                        borderColor={isFocused ? 'red' : 'redBright'}
                    >
                        {children}
                    </Box>
                )}
            >
                <Text>4. combine render function and children</Text>
            </Button>

            <Button
                onClick={onClick}
                render={({ isFocused, children }) => (
                    <Box
                        borderStyle='round'
                        borderColor={isFocused ? 'white' : 'gray'}
                    >
                        {children}
                    </Box>
                )}
            >
                {({ isFocused }) => (
                    <Text underline={isFocused}>
                        5. combine render function and children render function
                    </Text>
                )}
            </Button>

            <Box gap={1}>
                <Button onClick={() => setCount(() => 0)}>
                    {({ isFocused }) => (
                        <Text underline={isFocused}>
                            reset counter
                        </Text>
                    )}
                </Button>

                <Button onClick={() => setCount(() => 100)}>
                    {({ isFocused }) => (
                        <Text underline={isFocused}>
                            set count to 100
                        </Text>
                    )}
                </Button>
            </Box>
        </Box>
    )
}

export default Example
