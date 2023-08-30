import React from 'react'
import { Box, Newline, Text } from 'ink'
import { InkChildren, useTextInput, TextInputProps, TextInputRenderProps } from '@ink-inputs/core'
import Composer from './Composer.js'

function TextInputRenderFallback({
    value,
    isFocused,
    cursorPosition,
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
                    backgroundColor="whiteBright"
                    color="gray"
                >
                    {charsUnderCursor}
                </Text>
                {charsAfterCursor}
                {isCursorAtEnd && (
                    <Text backgroundColor="whiteBright">
                        {" "}
                    </Text>
                )}
                <Newline />

                {charsBeforeCursor}|{charsUnderCursor}|{charsAfterCursor}
            </Text>
        </Box>
    )
}

const TextInput: React.FC<TextInputProps> = Composer({
    fallback: TextInputRenderFallback,
    hook: useTextInput,
})

export default TextInput
