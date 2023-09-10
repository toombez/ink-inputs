import { UseCursorOutput } from "@hooks/index.js"
import {
    CustomRenderElementProps,
    FocusableElementProps,
    FocusableElementRenderProps,
    InputElementProps,
    InputElementRenderProps,
    OpenableElementProps,
    OpenableElementRenderProps,
    Option,
} from "@types"

export type RadioValue<T> = Option<T> | null

/**
 * Type of props for custom render functional component of `Radio` UI element
 */
export type RadioRenderProps<T> = {
    options: Array<Option<T>>
    valueIndex: number | null
    cursorPosition: UseCursorOutput['cursorPosition']
}
    & FocusableElementRenderProps
    & InputElementRenderProps<RadioValue<T>>

/**
 * Type of props for `Radio` UI element
 */
export type RadioProps<T> = {
    options: Array<Option<T>>
}
    & FocusableElementProps
    & InputElementProps<RadioValue<T>>
    & CustomRenderElementProps<RadioRenderProps<T>>
