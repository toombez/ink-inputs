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

export type SingleSelectValue<T> = Option<T> | null

export type SingleSelectRenderProps<T> = {
    options: Array<Option<T>>
    showCount: number
    valueIndex: number | null
    cursorPosition: UseCursorOutput['cursorPosition']
}
    & FocusableElementRenderProps
    & InputElementRenderProps<SingleSelectValue<T>>
    & OpenableElementRenderProps

export type SingleSelectProps<T> = {
    options: Array<Option<T>>
    showCount?: number
}
    & FocusableElementProps
    & InputElementProps<SingleSelectValue<T>>
    & CustomRenderElementProps<SingleSelectRenderProps<T>>
    & OpenableElementProps
