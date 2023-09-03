import React from "react"
import { CustomRenderFC } from "@types"
import { TextInputRenderProps } from "./TextInput.types.js"
import { Box, Text } from "ink"

const TextInputFallback: CustomRenderFC<TextInputRenderProps> = ({
    isDisabled,
    isFocused,
    placeholder,
    charsAfterCursor,
    charsBeforeCursor,
    charsUnderCursor,
    isCursorAtEnd,
    value,
    isShowPlaceholder,
}) => {
    return (
        <Box minHeight={1}>
            {isShowPlaceholder
                ? <Text>
                    {placeholder}
                </Text>
                : <Text
                    backgroundColor={isDisabled ? 'gray' : 'black'}
                    underline={isFocused}
                >
                    {charsBeforeCursor}
                    <Text inverse={isFocused}>
                        {charsUnderCursor}
                    </Text>
                    {charsAfterCursor}

                    {isCursorAtEnd && (
                        <Text inverse={isFocused}>
                            {" "}
                        </Text>
                    )}
                </Text>
            }
        </Box>
    )
}

export default TextInputFallback
