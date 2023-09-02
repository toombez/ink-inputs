import { UseCursorOutput } from "@hooks/index.js"
import {
    CustomRenderElementProps,
    FocusableElementProps,
    FocusableElementRenderProps,
    InputElementProps,
    InputElementRenderProps,
    Option,
} from "@types"

export type CheckBoxValue<T> = Array<Option<T>>

export type CheckBoxRenderProps<T> = {
    options: Array<Option<T>>
    valueIndexes: Array<number>
    cursorPosition: UseCursorOutput['cursorPosition']
}
    & FocusableElementRenderProps
    & InputElementRenderProps<CheckBoxValue<T>>

export type CheckBoxProps<T> = {
    options: Array<Option<T>>
}
    & FocusableElementProps
    & InputElementProps<CheckBoxValue<T>>
    & CustomRenderElementProps<CheckBoxRenderProps<T>>
