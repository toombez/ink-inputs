import { useFocus } from "ink"

export type InkChildren = React.ReactNode

export type UseFocusOptions = NonNullable<Parameters<typeof useFocus>[0]>

export type UseFocusOutput = ReturnType<typeof useFocus>

export type CustomRenderFC<P extends object = {}> = React.FC<P>

export type FocusableElementProps = {
    id?: UseFocusOptions['id']
    autoFocus?: UseFocusOptions['autoFocus']
    isDisabled?: boolean

    onFocus?: () => void
    onBlur?: () => void
}

export type FocusableElementRenderProps = {
    isDisabled: boolean
    isFocused: UseFocusOutput['isFocused']

    focus: UseFocusOutput['focus']
}

export type CustomRenderElementProps<RenderProps extends Object = {}> = {
    children?: CustomRenderFC<RenderProps>
    render?: CustomRenderFC<RenderProps>
}

export type InputElementProps<ValueType> = {
    placeholder?: string
    value?: ValueType

    onChange?: (value: ValueType) => void
    onSubmit?: (value: ValueType) => void
}

export type InputElementRenderProps<ValueType> = {
    placeholder: string
    value: ValueType

    change: (value: ValueType) => void
    submit: (value: ValueType) => void
}

export type OpenableElementProps = {
    autoOpen: boolean
}

export type OpenableElementRenderProps = {
    isOpened: boolean
    open: () => void
    close: () => void
}
