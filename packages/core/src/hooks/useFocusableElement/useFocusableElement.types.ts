import type { FocusableElementProps, FocusableElementRenderProps } from "@types"

/**
 * Ink-inputs `useFocusableElement` options
 */
export type UseFocusableElementOptions = {}
    & Pick<FocusableElementProps,
        'id'
        | 'isDisabled'
        | 'autoFocus'
        | 'onBlur'
        | 'onFocus'
    >

/**
 * Ink-inputs `useFocusableElement` output
 */
export type UseFocusableElementOutput = {}
    & Pick<FocusableElementRenderProps,
        'focus'
        | 'isDisabled'
        | 'isFocused'
    >
