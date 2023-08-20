import { useFocus } from 'ink'

// =========================
// Ink.js helper types
// =========================

/**
 * Type for ink components childrens
 */
export type InkChildren = React.ReactNode

/**
 * Use focus options
 */
export type UseFocusOptions = Parameters<typeof useFocus>[0]

// =========================
// Ink-inputs general types
// =========================

/**
 * Handler type for inputs
 */
export type Handler = () => void

/**
 * Input render component type
 */
export type InputRender<
    T extends BaseRenderProps = BaseRenderProps,
> = React.FC<T>

/**
 * Input children
 */
export type InputChildren<
    T extends BaseRenderProps = BaseRenderProps,
> = InkChildren | InputRender<T>

// =========================
// Ink-inputs base props types
// =========================

/**
 * Input render common props
 */
export type BaseRenderProps = {
    /**
     * Is focused input
     */
    isFocused: boolean
}

/**
 * Input common props
 */
export type BaseInputProps<
    T extends BaseRenderProps = BaseRenderProps,
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

export type PropsBuilder<
    /**
     * Input props
     */
    T extends Object = {},
    /**
     * Render props
     */
    K extends Object = {},
> = {
    inputProps: T & BaseInputProps<K & BaseRenderProps>
    renderProps: K & BaseRenderProps
}
