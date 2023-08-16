import React, { useEffect, useRef } from 'react'
import { InputProps, InputRenderProps } from '@types'
import { useFocus, useInput as useKeyboardInput } from 'ink'
import { useCursor } from './useCursor.js'

type InputCursorOperations = 'ADD' | 'REMOVE'

export function useInput({
    focusOptions,
    onBlur = () => {},
    onFocus = () => {},
    onInput,
}: InputProps): InputRenderProps {
    const { focus, isFocused } = useFocus(focusOptions)

    const [value, setValue] = React.useState<string>('')
    const previousOperation = useRef<InputCursorOperations | null>(null)

    const {
        move,
        position: cursorPosition,
    } = useCursor({ isRepeating: false, maxPosition: value.length + 1 })

    useEffect(() => {
        switch (previousOperation.current) {
            case 'ADD': {
                move(1)
                break;
            }

            case 'REMOVE': {
                move(-1)
                break
            }
        }
    }, [value])

    useKeyboardInput((char, key) => {
        const isEnter = key.return
        const isBackspace = key.backspace

        const isRightArrow = key.rightArrow
        const isLeftArrow = key.leftArrow

        if (isEnter) {
            return input(value)
        }

        if (isBackspace) {
            return removeChar()
        }

        if (char) {
            return addChar(char)
        }

        if (isRightArrow) {
            return move(1)
        }
        if (isLeftArrow) {
            return move(-1)
        }
    }, { isActive: isFocused })

    function removeChar() {
        return setValue((value) => {
            previousOperation.current = 'REMOVE'
            return value.slice(0, cursorPosition) + value.slice(cursorPosition + 1)
        })
    }

    function addChar(char: string) {
        return setValue((value) => {
            const beforeCursorChars = value.slice(0, cursorPosition) || ''
            const atCursorChar = value.at(cursorPosition) || ''
            const afterCursorChars = value.slice(cursorPosition + 1) || ''

            previousOperation.current = 'ADD'
            return beforeCursorChars + char + atCursorChar + afterCursorChars
        })
    }

    function input(value: string) {
        setValue(() => value)
        onInput?.(value)
    }

    return {
        isFocused,
        value,
        cursorPosition,

        input,
    }
}
