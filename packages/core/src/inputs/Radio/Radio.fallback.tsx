import React from 'react'
import { Box, Text } from "ink";
import { RadioRenderProps } from "./Radio.types.js";
import figureSet from 'figures';

const RadioFallback = <T, >({
    isFocused,
    isDisabled,
    value,
    valueIndex,
    placeholder,
    options,
    cursorPosition
}: RadioRenderProps<T>) => (
    <Box flexDirection='column'>
        <Text
            inverse={isFocused}
            strikethrough={isDisabled}
        >
            {placeholder}
        </Text>
        {options.map((option, index) => (
            <Text
                key={index}
                underline={isFocused && index === cursorPosition}
                inverse={isFocused && index === cursorPosition}
                strikethrough={isDisabled}
            >
                {valueIndex === index
                    ? figureSet.radioOn
                    : figureSet.radioOff
                }
                {' '}
                {option.label}
            </Text>
        ))}
    </Box>
)

export default RadioFallback
