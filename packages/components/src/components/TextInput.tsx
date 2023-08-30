import React from 'react'
import { Box, Newline, Text } from 'ink'
import { InkChildren, useTextInput, TextInputProps, TextInputRenderProps } from '@ink-inputs/core'
import Composer from './Composer.js'

function TextInputRenderFallback({
    isFocused,
    charsAfterCursor,
    charsBeforeCursor,
    charsUnderCursor,
    isCursorAtEnd,
}: TextInputRenderProps): InkChildren {
    return (
        <Box minHeight={1}>
            <Text
                underline={isFocused}
            >
                {charsBeforeCursor}
                <Text
                    backgroundColor={isFocused ? "whiteBright" : "black"}
                    color={isFocused ? "gray" : "white"}
                >
                    {charsUnderCursor}
                </Text>
                {charsAfterCursor}
                {isCursorAtEnd && (
                    <Text backgroundColor={isFocused ? "whiteBright" : "black"}>
                        {" "}
                    </Text>
                )}
            </Text>
        </Box>
    )
}

const TextInput: React.FC<TextInputProps> = Composer({
    fallback: TextInputRenderFallback,
    hook: useTextInput,
})

export default TextInput
