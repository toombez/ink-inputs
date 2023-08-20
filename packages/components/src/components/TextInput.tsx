import React from 'react'
import { Box, Text } from 'ink'
import { InkChildren, useTextInput, TextInputProps, TextInputRenderProps, useRender, useSelect } from '@ink-inputs/core'
import Composer from './Composer.js'

function TextInputRenderFallback({
    value,
    isFocused,
    cursorPosition,
}: TextInputRenderProps): InkChildren {
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

const TextInput: React.FC<TextInputProps> = Composer({
    fallback: TextInputRenderFallback,
    hook: useTextInput,
})

export default TextInput
