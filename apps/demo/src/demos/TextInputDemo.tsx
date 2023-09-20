import DemoWrapper from "@componentsDemoWrapper.js"
import { TextInput } from "@ink-inputs/core"
import { Box, BoxProps, Text } from "ink"
import React, { useState } from "react"

const TextInputDemo: React.FC = () => {
    const [value, setValue] = useState('initial')

    const [borderColor, setBorderColor] = useState<BoxProps['borderColor']>('yellow')

    return (
        <Box flexDirection="column">
            <Text>
                Value: {value}
            </Text>

            <DemoWrapper label="1. Text input with fallback">
                <TextInput
                    value={value}
                    onChange={setValue}
                />
            </DemoWrapper>

            <DemoWrapper label='2. Children prop provider for custom render function component'>
                <TextInput
                    value={value}
                    onChange={setValue}
                >
                    {({
                        charsBeforeCursor,
                        charsUnderCursor,
                        charsAfterCursor,
                        isFocused
                    }) => (
                        <Box
                            borderStyle="round"
                            borderColor="cyan"
                            width="10"
                        >
                            <Text underline={isFocused}>
                                {charsBeforeCursor}
                                <Text inverse={isFocused}>
                                    {charsUnderCursor || ' '}
                                </Text>
                                {charsAfterCursor}
                            </Text>
                        </Box>
                    )}
                </TextInput>
            </DemoWrapper>

            <DemoWrapper label="3. Render prop provider for custom render function component">
                <TextInput
                    value={value}
                    onChange={setValue}
                    onFocus={() => setBorderColor('red')}
                    onBlur={() => setBorderColor('yellow')}
                    render={({
                        charsBeforeCursor,
                        charsUnderCursor,
                        charsAfterCursor,
                        isFocused,
                    }) => (
                        <Box
                            borderColor={borderColor}
                            borderStyle="round"
                        >
                            <Text underline={isFocused}>
                                {charsBeforeCursor}
                                <Text inverse={isFocused}>
                                    {charsUnderCursor || " "}
                                </Text>
                                {charsAfterCursor}
                            </Text>
                        </Box>
                    )}
                />
            </DemoWrapper>

            <DemoWrapper label="4. Disabled text input">
                <TextInput isDisabled value={value} onChange={setValue} />
            </DemoWrapper>
        </Box>
    )
}

export default TextInputDemo
