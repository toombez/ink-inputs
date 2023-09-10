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

/**
 * Type of value for `SingleSelect` UI element
 */
export type SingleSelectValue<ValueType> = Option<ValueType> | null

/**
 * Type of props for custom render functional component of `SingleSelect` UI
 * element
 */
export type SingleSelectRenderProps<T> = {
    options: Array<Option<T>>
    showCount: number
    valueIndex: number | null
    cursorPosition: UseCursorOutput['cursorPosition']
    showedOptions: Array<[Option<T>, number]>
}
    & FocusableElementRenderProps
    & InputElementRenderProps<SingleSelectValue<T>>
    & OpenableElementRenderProps

/**
 * Type of props for `SingleSelect` UI element
 */
export type SingleSelectProps<T> = {
    options: Array<Option<T>>
    showCount?: number
}
    & FocusableElementProps
    & InputElementProps<SingleSelectValue<T>>
    & CustomRenderElementProps<SingleSelectRenderProps<T>>
    & OpenableElementProps
