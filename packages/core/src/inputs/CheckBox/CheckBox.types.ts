import { UseCursorOutput } from "@hooks/index.js"
import {
    ArrayInputElementProps,
    ArrayInputElementRenderProps,
    CustomRenderElementProps,
    FocusableElementProps,
    FocusableElementRenderProps,
    Option,
} from "@types"

export type CheckBoxValue<T> = Option<T>

export type CheckBoxRenderProps<T> = {
    options: Array<Option<T>>
    valueIndexes: Array<number>
    cursorPosition: UseCursorOutput['cursorPosition']
}
    & FocusableElementRenderProps
    & ArrayInputElementRenderProps<CheckBoxValue<T>>

export type CheckBoxProps<T> = {
    options: Array<Option<T>>
}
    & FocusableElementProps
    & ArrayInputElementProps<CheckBoxValue<T>>
    & CustomRenderElementProps<CheckBoxRenderProps<T>>
