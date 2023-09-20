import React, { useState } from 'react'
import { Box, Text, TextProps } from "ink"
import DemoWrapper from '@components/DemoWrapper.js'
import { Button } from '@ink-inputs/core'

const ButtonDemo: React.FC = () => {
    const [count, setCount] = useState(0)

    const [
        buttonTextColor,
        setButtonTextColor
    ] = useState<TextProps['color']>('red')

    return (
        <Box flexDirection='column'>
            <Text>
                Count: {count}
            </Text>

            <DemoWrapper label='1. Button used fallback'>
                <Button
                    label='add 1 to count'
                    onClick={() => setCount(count + 1)}
                />
            </DemoWrapper>

            <DemoWrapper label='2. Children prop provider for custom render function component'>
                <Button
                    label='remove from count 1'
                    onClick={() => setCount(count - 1)}
                >
                    {({
                        isDisabled,
                        isFocused,
                        label,
                    }) => (
                        <Box
                            borderColor={isFocused ? 'gray': 'green'}
                            borderStyle="round"
                        >
                            <Text
                                strikethrough={isDisabled}
                                underline={isFocused}
                            >
                                {label}
                            </Text>
                        </Box>
                    )}
                </Button>
            </DemoWrapper>

            <DemoWrapper label='3. Render prop provider for custom render function component'>
                <Button
                    label='set count to 0'
                    onClick={() => setCount(0)}
                    onFocus={() => setButtonTextColor('white')}
                    onBlur={() => setButtonTextColor('red')}
                    render={({
                        isDisabled,
                        isFocused,
                        label,
                    }) => (
                        <Text
                            strikethrough={isDisabled}
                            underline={isFocused}
                            color={buttonTextColor}
                        >
                            {label}
                        </Text>
                    )}
                />
            </DemoWrapper>

            <DemoWrapper label='4. Disabled button'>
                <Button
                    label='disabled'
                    isDisabled
                />
            </DemoWrapper>
        </Box>
    )
}

export default ButtonDemo
