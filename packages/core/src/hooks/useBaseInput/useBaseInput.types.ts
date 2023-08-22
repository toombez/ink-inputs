import type { BaseInputProps, BaseRenderProps } from "@types"

export type UseBaseInputOptions = Pick<BaseInputProps,
    'id'
    | 'isDisabled'
    | 'autoFocus'
    | 'onBlur'
    | 'onFocus'
>

export type UseBaseInputResult = Pick<BaseRenderProps,
    'focus'
    | 'isDisabled'
    | 'isFocused'
>
