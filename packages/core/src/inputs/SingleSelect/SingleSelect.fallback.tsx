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
    isDisabled,
    cursorPosition,
    showedOptions,
}) => (
    <Box
        flexDirection="column"
        minHeight={1}
    >
        <Text
            underline={isFocused}
            inverse={isFocused}
            strikethrough={isDisabled}
        >
            {value
                ? value.label
                : placeholder || '/'
            }
        </Text>
        <Box
            position="relative"
            flexDirection="column"
            display={isOpened ? 'flex' : 'none'}
            borderColor="gray"
            borderStyle="round"
        >
            {showedOptions
                .map(([option, index]) => (
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

export default SingleSelectFallback
