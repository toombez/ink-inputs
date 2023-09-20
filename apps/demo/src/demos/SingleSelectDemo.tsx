import DemoWrapper from '@componentsDemoWrapper.js'
import { SingleSelect, SingleSelectValue } from '@ink-inputs/core'
import { Box, Newline, Text } from 'ink'
import React, { useState } from 'react'

type ValueType = SingleSelectValue<number>

const SingleSelectDemo: React.FC = () => {
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
                label: {value?.label || 'no value'}
                <Newline />
                value: {value?.value || 'no value'}
            </Text>

            <DemoWrapper label='1. Single select used fallback'>
                <SingleSelect
                    options={options}
                    value={value}
                    onChange={setValue}
                />
            </DemoWrapper>

            <DemoWrapper label='2. Children prop provider for custom render function component'>
                <SingleSelect
                    options={options}
                    value={value}
                    onChange={setValue}
                >
                    {({
                        options,
                        isOpened,
                        isFocused,
                        isDisabled,
                        value,
                        cursorPosition,
                    }) => (
                        <Box flexDirection='column'>
                            <Text
                                strikethrough={isDisabled}
                                underline={isFocused}
                            >
                                {value?.label || 'please select value: ' + "/"}
                            </Text>
                            <Box display={isOpened ? 'flex' : 'none'}>
                                {options.map((option, index) => (
                                    <Box
                                        key={index}
                                    >
                                        <Text
                                            underline={index === cursorPosition }
                                            >
                                            {option.label}
                                        </Text>
                                        <Text>
                                            {
                                                index === options.length - 1
                                                ? ""
                                                : ','
                                            }
                                        </Text>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    )}
                </SingleSelect>
            </DemoWrapper>

            <DemoWrapper label='3. Render prop provider for custom render function component'>
                <SingleSelect
                    options={options}
                    value={value}
                    onChange={setValue}
                    render={({
                        options,
                        isOpened,
                        isFocused,
                        isDisabled,
                        value,
                        cursorPosition,
                    }) => (
                        <Box flexDirection='column'>
                            <Text
                                strikethrough={isDisabled}
                                underline={isFocused}
                            >
                                {value?.label || 'please select value: ' + "/"}
                            </Text>
                            <Box display={isOpened ? 'flex' : 'none'}>
                                {options.map((option, index) => (
                                    <Box
                                        key={index}
                                    >
                                        <Text
                                            underline={index === cursorPosition }
                                            >
                                            {option.label}
                                        </Text>
                                        <Text>
                                            {
                                                index === options.length - 1
                                                ? ""
                                                : ','
                                            }
                                        </Text>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    )}
                />
            </DemoWrapper>

            <DemoWrapper label='4. Disabled single select'>
                <SingleSelect
                    isDisabled
                    options={options}
                    value={value}
                    onChange={setValue}
                />
            </DemoWrapper>
        </Box>
    )
}

export default SingleSelectDemo
