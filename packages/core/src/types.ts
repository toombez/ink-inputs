import { useFocus } from "ink"

/**
 * Omit with intellisense
 *
 * @template Type target type
 * @template ExcludeKeys keys to exclude from `Type`
 */
export type IntellisenseOmit<
    Type,
    ExcludeKeys extends keyof Type
        | (string & {})
        | (number & {})
        | (symbol | {})
> = {
    [Field in Exclude<keyof Type, ExcludeKeys>]: Type[Field]
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
 *
 * @template RenderProps type of props for custom render functional component
 */
export type CustomRenderElementProps<RenderProps extends Object = {}> = {
    children?: CustomRenderFC<RenderProps>
    render?: CustomRenderFC<RenderProps>
}

/**
 * Type of props for the UI element component that implemented the ability to
 * enter user data
 *
 * @template Value type of value that the user inputs
 */
export type InputElementProps<Value> = {
    placeholder?: string
    value?: Value
    onChange?: (value: Value) => void
    onSubmit?: (value: Value) => void
}

/**
 * Type of props for the custom functional component renderer component of the
 * UI element component that implemented the the ability to input user data
 *
 * @template Value type of value that the user inputs
 */
export type InputElementRenderProps<Value> = {
    placeholder: string
    value: Value
    change: (value: Value) => void
    submit: (value: Value) => void
}

/**
 * Type of props for a UI element component that implemented the ability to
 * enter user data as an array
 *
 * @template Value type of value that the user inputs
 */
export type ArrayInputElementProps<Value> = InputElementProps<
    Array<Value>
>

/**
 * Type of props for a custom functional component renderer component of a UI
 * element component that implemented the ability to input user data as an
 * array
 *
 * @template Value type of value in array that the user inputs
 */
export type ArrayInputElementRenderProps<Value> = IntellisenseOmit<
    InputElementRenderProps<Array<Value>>,
    'change'
    | 'submit'
> & {
    change: (value: Value) => void
    submit: (value: Value) => void
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
 *
 * @template Value type of option's value
 */
export type Option<Value> = {
    label: string
    value: Value
}
