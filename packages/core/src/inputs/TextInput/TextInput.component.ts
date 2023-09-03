import { useCustomRenderElement, useFocusableElement, useWideCursor } from "@hooks/index.js"
import { TEXT_INPUT_KEY_OPERATION, TextInputProps } from "./TextInput.types.js"
import TextInputFallback from "./TextInput.fallback.js"
import { useRef, useEffect } from 'react'
import { useInput } from "ink"

const TextInput: React.FC<TextInputProps> = ({
    value = '',
    onChange = () => {},
    onSubmit = () => {},
    placeholder = '',
    ...rest
}) => {
    const {
        focus,
        isDisabled,
        isFocused,
    } = useFocusableElement(rest)

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
        initialWidth: 1,
        initialPosition: 0,
    })

    const {
        Render,
    } = useCustomRenderElement({
        fallback: TextInputFallback,
        ...rest
    })

    const previousOperation = useRef<TEXT_INPUT_KEY_OPERATION | null>(null)
    const charsBeforeCursor = value.slice(0, cursorPosition) || ''
    const charsUnderCursor = value.slice(cursorPosition, indexAfterCursor) || ''
    const charsAfterCursor = value.slice(indexAfterCursor) || ''

    useInput((char, key) => {
        if (key.return) {
            return
        }

        if (char) {
            previousOperation.current = 'ADD_CHAR'

            const value = charsBeforeCursor + char + charsUnderCursor + charsAfterCursor

            return change(value)
        }

        if ((key.backspace || key.delete) && value.length === 1) {
            const value = ""

            return change(value)
        }

        if (key.backspace) {
            previousOperation.current = 'BACKSPACE'

            const value =charsBeforeCursor.slice(0, indexBeforeCursor) + charsUnderCursor + charsAfterCursor

            return change(value)
        }

        if (key.delete) {
            previousOperation.current = 'DELETE'

            const value =charsBeforeCursor + charsUnderCursor + charsAfterCursor.slice(1)

            return change(value)
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
    }, { isActive: isFocused })

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

    function change(value: string) {
        onChange(value)
    }

    function submit(value: string) {
        onSubmit(value)
    }

    const isShowPlaceholder = !!placeholder && !value && !isFocused

    return Render({
        isFocused,
        isDisabled,
        isCursorAtEnd,
        isCursorAtStart,
        charsBeforeCursor,
        charsUnderCursor,
        charsAfterCursor,
        cursorPosition,
        placeholder,
        isShowPlaceholder,
        value,
        change,
        focus,
        submit,
    })
}

export default TextInput
