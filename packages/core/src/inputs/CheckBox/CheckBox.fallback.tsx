import React from "react"
import { Box, Text } from "ink"
import { CheckBoxRenderProps } from "./CheckBox.types.js"
import figureSet from 'figures'

const CheckBoxFallback = <T, >({
    isDisabled,
    isFocused,
    options,
    valueIndexes,
    cursorPosition,
    placeholder,
}: CheckBoxRenderProps<T>) => (
    <Box flexDirection="column">
        <Text
            strikethrough={isDisabled}
            inverse={isFocused}
        >
            {placeholder}
        </Text>
        {
            options.map((option, index) => (
                <Text
                    key={index}
                    underline={isFocused && index === cursorPosition}
                    inverse={isFocused && index === cursorPosition}
                    strikethrough={isDisabled}
                >
                    {valueIndexes.includes(index)
                        ? figureSet.checkboxOn
                        : figureSet.checkboxOff
                    }
                    {" "}
                    {option.label}
                </Text>
            ))
        }
    </Box>
)

export default CheckBoxFallback
