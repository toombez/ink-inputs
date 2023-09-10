import { useFocus } from "ink"

/**
 * Omit with intellisense
 */
export type IntellisenseOmit<
  T,
  K extends keyof T | (string & {}) | (number & {}) | (symbol | {})
> = {
    [P in Exclude<keyof T, K>]: T[P]
}

/**
 * Children prop used in the ink.js library
 */
export type InkChildren = React.ReactNode

/**
 * Ink.js `useFocus` hook options
 */
export type UseFocusOptions = NonNullable<Parameters<typeof useFocus>[0]>

/**
 * Ink.js `useFocus` hook output
 */
export type UseFocusOutput = ReturnType<typeof useFocus>

/**
 * Type for custom functional component of the UI element component
 *
 * @template Props component props
 */
export type CustomRenderFC<Props extends object = {}> = React.FC<Props>

/**
 * Type of props for the UI element component that implemented the ability to
 * focus on it
 */
export type FocusableElementProps = {
    id?: UseFocusOptions['id']
    autoFocus?: UseFocusOptions['autoFocus']
    isDisabled?: boolean
    onFocus?: () => void
    onBlur?: () => void
}

/**
 * Type of props for the custom functional component renderer of the UI element
 * component that implemented the ability to focus on it
 */
export type FocusableElementRenderProps = {
    isDisabled: boolean
    isFocused: UseFocusOutput['isFocused']
    focus: UseFocusOutput['focus']
}

/**
 * Type of props for the UI element component that implemented the ability to
 * pass a custom render functional component
 */
export type CustomRenderElementProps<RenderProps extends Object = {}> = {
    children?: CustomRenderFC<RenderProps>
    render?: CustomRenderFC<RenderProps>
}

/**
 * Type of props for the UI element component that implemented the ability to
 * enter user data
 */
export type InputElementProps<ValueType> = {
    placeholder?: string
    value?: ValueType
    onChange?: (value: ValueType) => void
    onSubmit?: (value: ValueType) => void
}

/**
 * Type of props for the custom functional component renderer component of the
 * UI element component that implemented the the ability to input user data
 *
 * @template ValueType type value that user input
 */
export type InputElementRenderProps<ValueType> = {
    placeholder: string
    value: ValueType
    change: (value: ValueType) => void
    submit: (value: ValueType) => void
}

/**
 * Type of props for a UI element component that implemented the ability to
 * enter user data as an array
 *
 * @template ValueType type value that user input
 */
export type ArrayInputElementProps<ValueType> = InputElementProps<
    Array<ValueType>
>

/**
 * Type of props for a custom functional component renderer component of a UI
 * element component that implemented the ability to input user data as an
 * array
 *
 * @template ValueType type value that user input
 */
export type ArrayInputElementRenderProps<ValueType> = IntellisenseOmit<
    InputElementRenderProps<Array<ValueType>>,
    'change'
    | 'submit'
> & {
    change: (value: ValueType) => void
    submit: (value: ValueType) => void
}

/**
 * Type of props for the UI element component that implemented the ability to
 * open and close it
 */
export type OpenableElementProps = {
    isAutoOpen?: boolean
}

/**
 * Type of props for the custom functional component renderer of the UI element
 * component that implemented the ability to open and close it
 */
export type OpenableElementRenderProps = {
    isOpened: boolean
    open: () => void
    close: () => void
}

/**
 * Type for data that can be selected from a list and rendered
 */
export type Option<ValueType> = {
    label: string
    value: ValueType
}
