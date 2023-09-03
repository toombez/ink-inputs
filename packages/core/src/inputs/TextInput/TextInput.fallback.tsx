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
    isShowPlaceholder,
}) => (
    <Box minHeight={1}>
        <Text
            underline={isFocused}
            strikethrough={isDisabled}
        >
            {isShowPlaceholder
                ? placeholder
                : (
                    <Text>
                        {charsBeforeCursor}
                        <Text inverse={isFocused}>
                            {charsUnderCursor || " "}
                        </Text>
                        {charsAfterCursor}
                    </Text>
                )
            }
        </Text>
    </Box>
)

export default TextInputFallback
