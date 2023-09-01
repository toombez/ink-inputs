import type { FocusableElementProps, FocusableElementRenderProps } from "@types"

export type UseFocusableElementOptions = {}
    & Pick<FocusableElementProps,
        'id'
        | 'isDisabled'
        | 'autoFocus'
        | 'onBlur'
        | 'onFocus'
    >

export type UseFocusableElementOutput = {}
    & Pick<FocusableElementRenderProps,
        'focus'
        | 'isDisabled'
        | 'isFocused'
    >
