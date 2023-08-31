import type { FormElementProps, FormElementRenderProps } from "@types"

export type UseFormElementOptions = Pick<FormElementProps,
    'id'
    | 'isDisabled'
    | 'autoFocus'
    | 'onBlur'
    | 'onFocus'
>

export type UseFormElementOutput = Pick<FormElementRenderProps,
    'focus'
    | 'isDisabled'
    | 'isFocused'
>
