import React from 'react'
import { InputProps, InputRenderProps } from '@types'
import { useFocus, useInput as useKeyboardInput } from 'ink'

export function useInput({
    focusOptions,
    onBlur = () => {},
    onFocus = () => {},
    onInput,
}: InputProps): InputRenderProps {
    const { focus, isFocused } = useFocus(focusOptions)

    const [value, setValue] = React.useState<string>('')

    React.useCallback(isFocused ? onBlur : onFocus, [isFocused])
    React.useCallback(() => onInput?.(value), [value])

    useKeyboardInput((_input, key) => {
        const isEnter = key.return
        const isBackspace = key.backspace

        if (isEnter) {
            return input(value)
        }

        if (isBackspace) {
            input(value.slice(0, value.length - 1))
        }

        if (_input) {
            input(value + _input)
        }
    }, { isActive: isFocused })

    function input(value: string) {
        setValue(() => value)
        onInput?.(value)
    }

    return {
        isFocused,
        value,

        input,
    }
}
