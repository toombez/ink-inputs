import React, { useEffect, useRef } from 'react'
import { PropsBuilder } from '@types'
import { useInput as useKeyboardInput } from 'ink'
import { useCursor } from './useCursor.js'
import { UseBaseInput } from './useBaseInput.js'

type TextInputTypes = PropsBuilder<{
    /**
     * On input handler
     * @param input new value
     */
    onInput?: (input: string) => void
}, {
    value: string
    cursorPosition: number
    input: (input: string) => void
}>

type TextInputCursorOperations = 'ADD' | 'REMOVE'

export type TextInputProps = TextInputTypes['InputProps']
export type TextInputRenderProps = TextInputTypes['RenderProps']

export function useTextInput({
    onInput,

    ...useBaseInputOptions
}: TextInputProps): TextInputRenderProps {
    const {
        focus,
        isDisabled,
        isFocused,
    } = UseBaseInput(useBaseInputOptions)

    const [value, setValue] = React.useState<string>('')
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
        isDisabled,
        value,
        cursorPosition,

        input,
        focus,
    }
}
