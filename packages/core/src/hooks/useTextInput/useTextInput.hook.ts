import React, { useEffect, useRef } from 'react'
import { useInput } from 'ink'
import { TEXT_INPUT_KEY_OPERATION, TextInputProps, TextInputRenderProps } from './useTextInput.types.js'
import { useBaseInput, useWideCursor } from '@hooks/index.js'

export function useTextInput({
    onInput = () => {},
    value = "",

    ...useBaseInputOptions
}: TextInputProps): TextInputRenderProps {
    const {
        focus,
        isDisabled,
        isFocused,
    } = useBaseInput(useBaseInputOptions)

    const {
        cursorPosition,
        cursorWidth,
        moveCursorTo,
        moveCursor,
        resizeCursor,
        resizeCursorToMinimal,
        isCursorAtEnd,
        isCursorAtStart,
        indexAfterCursor,
        indexBeforeCursor,
        isCursorMinimalWidth,
    } = useWideCursor({
        maxPosition: value.length,
        initialWidth: 1
    })

    const previousOperation = useRef<TEXT_INPUT_KEY_OPERATION | null>(null)
    const charsBeforeCursor = value.slice(0, cursorPosition) || ''
    const charsUnderCursor = value.slice(cursorPosition, indexAfterCursor) || ''
    const charsAfterCursor = value.slice(indexAfterCursor) || ''

    useInput((char, key) => {
        if (char) {
            previousOperation.current = 'ADD_CHAR'

            const value = charsBeforeCursor + char + charsUnderCursor + charsAfterCursor

            return onInput(value)
        }

        if ((key.backspace || key.delete) && value.length === 1) {
            const value = ""

            return onInput(value)
        }

        if (key.backspace) {
            previousOperation.current = 'BACKSPACE'

            const value =charsBeforeCursor.slice(0, indexBeforeCursor) + charsUnderCursor + charsAfterCursor

            return onInput(value)
        }

        if (key.delete) {
            previousOperation.current = 'DELETE'

            const value =charsBeforeCursor + charsUnderCursor + charsAfterCursor.slice(1)

            return onInput(value)
        }

        if (key.escape) {
            return resizeCursorToMinimal()
        }

        if (key.shift && key.rightArrow) {
            return resizeCursor(1)
        }

        if (key.shift && key.leftArrow && isCursorMinimalWidth) {
            moveCursor(-1)
        }

        if (key.shift && key.leftArrow) {
            return resizeCursor(-1)
        }

        if (key.leftArrow && isCursorAtStart) {
            resizeCursor(-1)
        }

        if (key.leftArrow) {
            return moveCursor(-1)
        }

        if (key.rightArrow && isCursorAtEnd) {
            resizeCursor(1)
        }

        if (key.rightArrow) {
            return moveCursor(1)
        }
    })

    useEffect(() => {
        switch (previousOperation.current) {
            case 'ADD_CHAR': {
                moveCursor(1)

                break;
            }

            case 'BACKSPACE': {
                moveCursor(-1)

                break
            }
        }
    }, [value])

    function input(value: string) {
        onInput(value)
    }

    return {
        isFocused,
        isDisabled,
        value,
        cursorPosition,
        charsBeforeCursor,
        charsUnderCursor,
        charsAfterCursor,
        isCursorAtEnd,

        focus,
        input,
    }
}
