import DemoWrapper from '@componentsDemoWrapper.js'
import { CheckBox, CheckBoxValue } from '@ink-inputs/core'
import { Box, Newline, Text } from 'ink'
import React, { useState } from 'react'

type ValueType = Array<CheckBoxValue<number>>

const CheckBoxDemo: React.FC = () => {
    const [value, setValue] = useState<ValueType>([])
    const [options] = useState<ValueType>([
        { label: 'value 1', value: 0 },
        { label: 'value 2', value: 1 },
        { label: 'value 3', value: 2 },
        { label: 'value 4', value: 3 },
        { label: 'value 5', value: 4 },
    ])

    return (
        <Box flexDirection='column'>
            <Text>
                Selected options:
                <Newline />
                {"  "}labels:{" "}
                [{ value
                    .map((option) => option.label)
                    .join(', ') || "no value"
                }]
                <Newline />
                {"  "}values:{" "}
                [{ value
                    .map((option) => option.value)
                    .join(", ") || "no value"
                }]
            </Text>

            <DemoWrapper label='1. CheckBox used fallback'>
                <CheckBox
                    options={options}
                    value={value}
                    onChange={setValue}
                />
            </DemoWrapper>

            <DemoWrapper label='2. Children prop provider for custom render function component'>
                <CheckBox
                    options={options}
                    value={value}
                    onChange={setValue}
                >
                    {({
                        valueIndexes,
                        cursorPosition,
                        options,
                        isDisabled,
                        isFocused,
                    }) => (
                        <Box gap={1}>
                            {
                                options
                                    .map((option, index) => (
                                        <Text
                                            strikethrough={isDisabled}
                                            key={index}
                                            underline={cursorPosition === index}
                                            backgroundColor={
                                                cursorPosition === index && isFocused
                                                ? "yellow"
                                                : "black"
                                            }
                                        >
                                            {valueIndexes.includes(index) ? "[x]" : "[ ]"}
                                            {" "}
                                            {option.label}
                                        </Text>
                                    ))
                            }
                        </Box>
                    )}
                </CheckBox>
            </DemoWrapper>

            <DemoWrapper label='3. Render prop provider for custom render function component'>
                <CheckBox
                    options={options}
                    value={value}
                    onChange={setValue}
                    render={({
                        valueIndexes,
                        cursorPosition,
                        options,
                        isDisabled,
                        isFocused,
                    }) => (
                        <Box gap={1}>
                            {
                                options
                                    .map((option, index) => (
                                        <Text
                                            strikethrough={isDisabled}
                                            key={index}
                                            underline={cursorPosition === index}
                                            backgroundColor={
                                                cursorPosition === index && isFocused
                                                ? "green"
                                                : "black"
                                            }
                                        >
                                            {valueIndexes.includes(index) ? "[x]" : "[ ]"}
                                            {" "}
                                            {option.label}
                                        </Text>
                                    ))
                            }
                        </Box>
                    )}
                />
            </DemoWrapper>

            <DemoWrapper label='4. Disabled button'>
                <CheckBox
                    options={options}
                    value={value}
                    onChange={setValue}
                    isDisabled
                />
            </DemoWrapper>
        </Box>
    )
}

export default CheckBoxDemo
