import React, { useState } from 'react'
import { Button } from '@ink-inputs/fallback'
import { Box, Text } from 'ink'

const Example: React.FC = () => {
    const [count, setCount] = useState(0)

    function onClick() {
        setCount((c) => c + 1)
    }

    return (
        <Box flexDirection='column'>
            <Text>
                Counts: {count}
            </Text>

            <Button onClick={onClick} label='1. Fallback' />

            <Button onClick={onClick}>
                <Text>
                    2. Children
                </Text>
            </Button>

            <Button onClick={onClick}>
                {({ isFocused }) => (
                    <Text underline={isFocused}>
                        3. Children render
                    </Text>
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
                            4. Render prop
                        </Text>
                    </Box>
                )}
            />

            <Button
                onClick={onClick}
                label='5. Label and render prop'
                render={({ isFocused, label }) => (
                    <Box
                        borderStyle='round'
                        borderColor={isFocused ? 'red' : 'redBright'}
                    >
                        <Text>
                            {label}
                        </Text>
                    </Box>
                )}
            />

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
