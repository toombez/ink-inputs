import React from "react";
import { SingleSelectRenderProps } from "./SingleSelect.types.js";
import { Box, Text } from "ink";
import { CustomRenderFC } from "@types";

const SingleSelectFallback: CustomRenderFC<SingleSelectRenderProps<any>> = ({
    options,
    value,
    showCount,
    placeholder,
    isOpened,
    isFocused,
    cursorPosition,
}) => {
    return (
        <Box flexDirection="column" minHeight={1}>
            <Text underline={isFocused}>
                {value ? value.label : placeholder || '---'}
            </Text>
            <Box
                position="relative"
                flexDirection="column"
                display={isOpened ? 'flex' : 'none'}
            >
                {options
                    .slice(
                        Math.max(cursorPosition - Math.ceil(showCount / 2), 0),
                        cursorPosition + Math.ceil(showCount / 2)
                    )
                    .map((option, index) => (
                        <Text
                            key={index}
                            underline={cursorPosition === index}
                            inverse={option === value}
                        >
                            {option.label}
                        </Text>
                    )
                )}
            </Box>
        </Box>
    )
}

export default SingleSelectFallback
