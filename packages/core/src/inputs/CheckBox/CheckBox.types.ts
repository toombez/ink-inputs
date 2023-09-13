import { UseCursorOutput } from "@hooks/index.js"
import {
    ArrayInputElementProps,
    ArrayInputElementRenderProps,
    CustomRenderElementProps,
    FocusableElementProps,
    FocusableElementRenderProps,
    Option,
} from "@types"

/**
 * Type for `CheckBox` options
 *
 * @template Value type of `CheckBox` option's value
 */
export type CheckBoxValue<Value> = Option<Value>

/**
 * Type of props for custom render functional component of `CheckBox` UI
 * element
 *
 * @template Value type of `CheckBox` option's value
 */
export type CheckBoxRenderProps<Value> = {
    /**
     * List of options from which to choose
     */
    options: Array<Option<Value>>

    /**
     * Selected option indexes array
     */
    valueIndexes: Array<number>

    /**
     * Cursor current position
     */
    cursorPosition: UseCursorOutput['cursorPosition']
}
    & FocusableElementRenderProps
    & ArrayInputElementRenderProps<CheckBoxValue<Value>>

/**
 * Type of props for `CheckBox` UI element
 *
 * @template Value type of `CheckBox` option's value
 */
export type CheckBoxProps<Value> = {
    /**
     * List of options from which to choose
     */
    options: Array<Option<Value>>
}
    & FocusableElementProps
    & ArrayInputElementProps<CheckBoxValue<Value>>
    & CustomRenderElementProps<CheckBoxRenderProps<Value>>
