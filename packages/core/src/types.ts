import { useFocus } from 'ink'

/**
 * Type for ink components childrens
 */
export type InkChildren = React.ReactElement

/**
 * Handler type for inputs
 */
export type Handler = () => void

/**
 * Use focus options
 */
export type UseFocusOptions = Parameters<typeof useFocus>[0]

/**
 * Input render common props
 */
export type InputRenderCommonProps = {
    /**
     * Is focused input
     */
    isFocused: boolean
}

/**
 * Input render component type
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
    /**
     * Render component or static element
     */
    children?: InputChildren<T>

    /**
     * Render component
     */
    render?: InputRender<T>

    /**
     * `useFocus` hook options
     */
    focusOptions?: UseFocusOptions

    /**
     * Focus handler
     */
    onFocus?: Handler

    /**
     * Blur handler
     */
    onBlur?: Handler
}

/**
 * Button render props
 */
export type ButtonRenderProps = {
    /**
     * Button label
     */
    label: string
} & InputRenderCommonProps

/**
 * Button props
 */
export type ButtonProps = {
    /**
     * Click handler
     */
    onClick?: Handler

    /**
     * Button label
     */
    label?: string
} & InputCommonProps<ButtonRenderProps>
