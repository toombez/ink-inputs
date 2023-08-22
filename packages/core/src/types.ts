import { useFocus } from "ink"

export type InkChildren = React.ReactNode
export type UseFocusOptions = NonNullable<Parameters<typeof useFocus>[0]>
export type UseFocusResult = ReturnType<typeof useFocus>

export type InputRender<
    T extends BaseRenderProps = BaseRenderProps
> = React.FC<T>
export type InputChildren<
    T extends BaseRenderProps = BaseRenderProps
> = InkChildren | InputRender<T>

export type BaseInputProps<
    T extends BaseRenderProps = BaseRenderProps
> = {
    id?: UseFocusOptions['id']
    autoFocus?: UseFocusOptions['autoFocus']
    isDisabled?: boolean
    children?: InputChildren<T>
    render?: InputRender<T>

    onFocus?: () => void
    onBlur?: () => void
}

export type BaseRenderProps = {
    isDisabled: boolean
    isFocused: UseFocusResult['isFocused']
    focus: UseFocusResult['focus']
}

export type PropsBuilder<
    T extends Object = {},
    K extends Object = {},
> = {
    InputProps: T & BaseInputProps<K & BaseRenderProps>
    RenderProps: K & BaseRenderProps
}
