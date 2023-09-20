import React, { useState } from 'react'
import { Option, Radio } from '@ink-inputs/core'
import { Box, Newline, Text } from 'ink'
import DemoWrapper from '@componentsDemoWrapper.js'

type ValueType = Option<number> | null

const RadioDemo: React.FC = () => {
    const [value, setValue] = useState<ValueType>(null)

    const [options] = useState<Array<Exclude<ValueType, null>>>([
        { label: 'value 1', value: 0 },
        { label: 'value 2', value: 1 },
        { label: 'value 3', value: 2 },
        { label: 'value 4', value: 3 },
    ])

    return (
        <Box flexDirection='column'>
            <Text>
                selected label: {value?.label || 'no value'}
                <Newline />
                selected value: {value?.value || 'no value'}
            </Text>

            <DemoWrapper label='1. Radio used fallback'>
                <Radio
                    options={options}
                    value={value}
                    onChange={setValue}
                />
            </DemoWrapper>

            <DemoWrapper label='2. Children prop provider for custom render function component'>
                <Radio
                    options={options}
                    value={value}
                    onChange={setValue}
                >
                    {({
                        options,
                        isDisabled,
                        isFocused,
                        value,
                        valueIndex,
                        cursorPosition,
                    }) => (
                        <Box flexDirection='column'>
                            <Text underline={isFocused} strikethrough={isDisabled}>
                                {value?.label || "please select option: "}
                            </Text>

                            <Box gap={1}>
                                {options.map((option, index) => (
                                    <Text
                                        key={index}
                                        backgroundColor={valueIndex === index ? "yellow": "black"}
                                        underline={cursorPosition === index}
                                    >
                                        {valueIndex === index ? "x" : "o"}
                                        {" "}
                                        {option.label}
                                    </Text>
                                ))}
                            </Box>
                        </Box>
                    )}
                </Radio>
            </DemoWrapper>

            <DemoWrapper label='3. Render prop provider for custom render function component'>
                <Radio
                    options={options}
                    value={value}
                    onChange={setValue}
                    render={({
                        options,
                        isDisabled,
                        isFocused,
                        value,
                        valueIndex,
                        cursorPosition,
                    }) => (
                        <Box flexDirection='column'>
                            <Text underline={isFocused} strikethrough={isDisabled}>
                                {value?.label || "please select option: "}
                            </Text>

                            <Box gap={1}>
                                {options.map((option, index) => (
                                    <Text
                                        key={index}
                                        backgroundColor={valueIndex === index ? "green": "black"}
                                        underline={cursorPosition === index}
                                    >
                                        {valueIndex === index ? "x" : "o"}
                                        {" "}
                                        {option.label}
                                    </Text>
                                ))}
                            </Box>
                        </Box>
                    )}
                />
            </DemoWrapper>

            <DemoWrapper label='4. Disabled radio'>
                <Radio
                    isDisabled
                    options={options}
                    value={value}
                    onChange={setValue}
                />
            </DemoWrapper>
        </Box>
    )
}

export default RadioDemo
