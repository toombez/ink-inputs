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
 * Type for `Radio` options
 *
 * @template Value type of `Radio` option's value
 */
export type RadioValue<Value> = Option<Value> | null

/**
 * Type of props for custom render functional component of `Radio` UI element
 *
 * @template Value type of `Radio` option's value
 */
export type RadioRenderProps<Value> = {
    options: Array<Option<Value>>
    valueIndex: number | null
    cursorPosition: UseCursorOutput['cursorPosition']
}
    & FocusableElementRenderProps
    & InputElementRenderProps<RadioValue<Value>>

/**
 * Type of props for `Radio` UI element
 *
 * @template Value type of `Radio` option's value
 */
export type RadioProps<Value> = {
    options: Array<Option<Value>>
}
    & FocusableElementProps
    & InputElementProps<RadioValue<Value>>
    & CustomRenderElementProps<RadioRenderProps<Value>>
