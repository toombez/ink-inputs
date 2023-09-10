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
 * Type for `SingleSelect` options
 *
 * @template Value type of `SingleSelect` option's value
 */
export type SingleSelectValue<Value> = Option<Value> | null

/**
 * Type of props for custom render functional component of `SingleSelect` UI
 * element
 *
 * @template Value type of `SingleSelect` option's value
 */
export type SingleSelectRenderProps<Value> = {
    options: Array<Option<Value>>
    showCount: number
    valueIndex: number | null
    cursorPosition: UseCursorOutput['cursorPosition']
    showedOptions: Array<[Option<Value>, number]>
}
    & FocusableElementRenderProps
    & InputElementRenderProps<SingleSelectValue<Value>>
    & OpenableElementRenderProps

/**
 * Type of props for `SingleSelect` UI element
 *
 * @template Value type of `SingleSelect` option's value
 */
export type SingleSelectProps<Value> = {
    options: Array<Option<Value>>
    showCount?: number
}
    & FocusableElementProps
    & InputElementProps<SingleSelectValue<Value>>
    & CustomRenderElementProps<SingleSelectRenderProps<Value>>
    & OpenableElementProps
