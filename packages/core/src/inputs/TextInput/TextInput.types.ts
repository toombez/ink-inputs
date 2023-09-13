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
    /**
     * Characters from the value string that are before the cursor
     */
    charsBeforeCursor: string

    /**
     * Characters from the value string that are under the cursor
     */
    charsUnderCursor: string

    /**
     * Characters from the value string that are after the cursor
     */
    charsAfterCursor: string

    /**
     * Specifies whether to display the placeholder
     */
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
