import { UseCursorOutput } from "@hooks/index.js"
import {
    CustomRenderElementProps,
    FocusableElementProps,
    FocusableElementRenderProps,
    InputElementProps,
    InputElementRenderProps
} from "@types"

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

export type TextInputProps = {}
    & FocusableElementProps
    & InputElementProps<string>
    & CustomRenderElementProps<TextInputRenderProps>

export type TEXT_INPUT_KEY_OPERATION = "ADD_CHAR" | "BACKSPACE" | "DELETE"
