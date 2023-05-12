import { Box, Text, useInput } from 'ink'
import React, { PropsWithChildren, useEffect, useState } from 'react'
import useFocusHandler, { UseFocusHandlerProps } from '../hooks/useFocusHandler.js'

type InputWrapperProps = {
    isFocused?: boolean
} & PropsWithChildren

const InputWrapper: React.FC<InputWrapperProps> = ({
    children,
}) => {
    return <Box>{children}</Box>
}

type InputProps = {
    WrapperComponent?: React.FC<InputWrapperProps>

    focusOptions?: UseFocusHandlerProps['focusOptions']
    onFocus?: UseFocusHandlerProps['handler']
    onChange?: (value: string) => void
}

const Input: React.FC<InputProps> = ({
    WrapperComponent = InputWrapper,
    focusOptions,
    onFocus,
    onChange = () => {},
}) => {
    const { isFocused } = useFocusHandler({ handler: onFocus, focusOptions })
    const [value, setValue] = useState('')

    function addChar(char: string) {
        setValue(v => v + char)
    }

    function removePreviousChar(count: number = 1) {
        if (value.length - count < 0) {
            return
        }

        setValue(v => v.slice(0, v.length - count))
    }

    useInput((input, key) => {
        if (key.backspace) {
            removePreviousChar()
            return
        }

        // TODO: implement copy and paste
        if (key.shift || key.ctrl) {
            return
        }

        // TODO: implement cursor offset and removing next chars
        if (key.delete) {
            return
        }

        if (key.leftArrow || key.rightArrow || key.upArrow || key.downArrow) {
            return
        }

        addChar(input)
    })

    useEffect(() => {
        onChange(value)
    }, [value])

    return (
        <WrapperComponent isFocused={isFocused}>
            <Text>{value}</Text>
        </WrapperComponent>
    )
}

export default Input
export {
    InputWrapper,
    Input,
}
export type {
    InputWrapperProps,
    InputProps,
}
