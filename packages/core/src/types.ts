import { useFocus } from "ink"

export type InkChildren = React.ReactNode

export type UseFocusOptions = NonNullable<Parameters<typeof useFocus>[0]>

export type UseFocusOutput = ReturnType<typeof useFocus>

export type CustomRenderFC<P extends Object = {}> = (
    props: P & FormElementRenderProps,
) => InkChildren

export type FormElementProps = {
    id?: UseFocusOptions['id']
    autoFocus?: UseFocusOptions['autoFocus']
    isDisabled?: boolean

    onFocus?: () => void
    onBlur?: () => void
}

export type FormElementRenderProps = {
    isDisabled: boolean
    isFocused: UseFocusOutput['isFocused']

    focus: UseFocusOutput['focus']
}

export type CustomRenderElementProps<P extends Object = {}> = {
    children?: CustomRenderFC<P>
    render?: CustomRenderFC<P>
}

export type InputElementProps<T> = {
    placeholder?: string
    value?: T

    onChange?: (value: T) => void
    onSubmit?: (value: T) => void
}

export type InputElementRenderProps<T> = {
    placeholder: string
    value: T

    change: (value: T) => void
    submit: (value: T) => void
}
