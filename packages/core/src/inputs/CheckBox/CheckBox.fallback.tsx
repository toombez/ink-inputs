import React from "react"
import { Box, Text } from "ink"
import { CheckBoxRenderProps } from "./CheckBox.types.js"

const CheckBoxFallback = <T, >({
    isDisabled,
    isFocused,
    options,
    value,
    valueIndexes,
    cursorPosition,
    placeholder,
}: CheckBoxRenderProps<T>) => {
    return (
        <Box>
            {
                options.map((option, index) => (
                    <Text
                        key={index}
                        underline={index === cursorPosition}
                    >
                        {valueIndexes.includes(index) ? 'o' : 'x'}
                        {' '}
                        {option.label}
                    </Text>
                ))
            }
        </Box>
    )
}

export default CheckBoxFallback
