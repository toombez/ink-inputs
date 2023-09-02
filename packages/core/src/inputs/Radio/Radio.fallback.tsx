import React from 'react'
import { Box, Text } from "ink";
import { RadioRenderProps } from "./Radio.types.js";

const RadioFallback = <T, >({
    cursorPosition,
    isFocused,
    value,
    valueIndex,
    options,
}: RadioRenderProps<T>) => {
    return (
        <Box>
            {options.map((option, index) => (
                <Text key={index} underline={valueIndex === index}>
                    <Text inverse={option === value}>
                        o
                    </Text>
                    {' '}
                    {option.label}
                </Text>
            ))}
        </Box>
    )
}

export default RadioFallback
