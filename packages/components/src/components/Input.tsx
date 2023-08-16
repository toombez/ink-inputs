import React from 'react'
import { Box, Text } from 'ink'
import { InkChildren, useInput, InputProps, InputRenderProps, useRender } from '@ink-inputs/core'
import Composer from './Composer.js'

function InputRenderFallback({
    value,
    isFocused,
    cursorPosition,
}: InputRenderProps): InkChildren {
    return (
        <Box minHeight={1}>
            <Text
                underline={isFocused}
            >
                {value.slice(0, cursorPosition)}
                <Text backgroundColor="gray">
                    {value.at(cursorPosition)!}
                </Text>
                {value.slice(cursorPosition + 1)}
            </Text>
        </Box>
    )
}

const Input = Composer({
    fallback: InputRenderFallback,
    hook: useInput,
})

export default Input
