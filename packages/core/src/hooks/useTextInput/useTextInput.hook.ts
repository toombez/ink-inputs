import React, { useEffect, useRef } from 'react'
import { useInput as useKeyboardInput } from 'ink'
import { TextInputCursorOperations, TextInputProps, TextInputRenderProps } from './useTextInput.types.js'
import { UseBaseInput, UseBaseInputOptions, UseCursorOptions } from '@hooks/index.js'
import { useCursor } from '@hooks/useCursor/useCursor.hook.js'

export function useTextInput({
    onInput,
    value = "",

    ...useBaseInputOptions
}: TextInputProps): TextInputRenderProps {
    const {
        focus,
        isDisabled,
        isFocused,
    } = UseBaseInput(useBaseInputOptions)

    const previousOperation = useRef<TextInputCursorOperations | null>(null)

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
        previousOperation.current = 'REMOVE'

        input(value.slice(0, cursorPosition) + value.slice(cursorPosition + 1))
    }

    function addChar(char: string) {
        const beforeCursorChars = value.slice(0, cursorPosition) || ''
        const atCursorChar = value.at(cursorPosition) || ''
        const afterCursorChars = value.slice(cursorPosition + 1) || ''

        previousOperation.current = 'ADD'

        input(beforeCursorChars + char + atCursorChar + afterCursorChars)
    }

    function input(value: string) {
        onInput?.(value)
    }

    return {
        isFocused,
        isDisabled,
        value,
        cursorPosition,

        input,
        focus,
    }
}
