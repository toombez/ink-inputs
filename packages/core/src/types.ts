import { useFocus } from 'ink'

/**
 * Type for ink components childrens
 */
export type InkChildren = JSX.Element | JSX.Element[]

/**
 * Handler type for inputs
 */
export type handler = () => void

/**
 * Use focus options
 */
export type useFocusOptions = Parameters<typeof useFocus>[0]

/**
 * Input render common props
 */
export type InputRenderCommonProps = {
    isFocused: boolean
}

/**
 * Input render
 */
export type InputRender<
    T extends InputRenderCommonProps = InputRenderCommonProps,
> = React.FC<T>

/**
 * Input children
 */
export type InputChildren<
    T extends InputRenderCommonProps = InputRenderCommonProps,
> = InkChildren | InputRender<T>

/**
 * Input common props
 */
export type InputCommonProps<
    T extends InputRenderCommonProps = InputRenderCommonProps,
> = {
    children?: InputChildren<T>
    render?: InputRender<T>
}
