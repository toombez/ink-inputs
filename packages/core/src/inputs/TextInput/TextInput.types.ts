import { UseCursorOutput } from "@hooks/index.js"
import {
    CustomRenderElementProps,
    FocusableElementProps,
    FocusableElementRenderProps,
    InputElementProps,
    InputElementRenderProps
} from "@types"

/**
 * Type of props for custom render functional component of `TextInput` UI
 * element
 */
export type TextInputRenderProps = {
    charsBeforeCursor: string
    charsUnderCursor: string
    charsAfterCursor: string
    isShowPlaceholder: boolean
}
    & FocusableElementRenderProps
    & InputElementRenderProps<string>
    & Pick<UseCursorOutput,
        "cursorPosition"
        | 'isCursorAtEnd'
        | 'isCursorAtStart'
    >

/**
 * Type of props for `TextInput` UI element
 */
export type TextInputProps = {}
    & FocusableElementProps
    & InputElementProps<string>
    & CustomRenderElementProps<TextInputRenderProps>

/**
 * Type of operations for `TextInput` UI element
 */
export type TEXT_INPUT_KEY_OPERATION = "ADD_CHAR" | "BACKSPACE" | "DELETE"
