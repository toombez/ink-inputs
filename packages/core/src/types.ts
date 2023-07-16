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
    /**
     * Click emitter
     */
    click: () => void
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

/**
 * Select option
 */
export interface SelectOption<T> {
    /**
     * Option value
     */
    value: T
    /**
     * Option label
     */
    label: string
}

/**
 * Select render props
 */
export type SelectRenderProps<T> = {
    /**
     * Is opened select
     */
    isOpened: boolean
    /**
     * Select options
     */
    options: SelectOption<T>[]
    /**
     * Count options to show
     */
    showCount: number
    /**
     * Selected index
     */
    selectedIndex: number
    /**
     * Selected option
     */
    selected: SelectOption<T>
    /**
     * Open select emitter
     */
    open: Handler
    /**
     * Close select emitter
     */
    close: Handler
    /**
     * Select emitter
     * @param delta new option index delta
     */
    select: (delta: number) => void
} & InputRenderCommonProps

/**
 * Select props
 */
export type SelectProps<T> = {
    /**
     * Select options
     */
    options: SelectOption<T>[]
    /**
     * Count options to show
     */
    showCount?: number
    /**
     * On select handler
     * @param value selected option value
     * @returns void
     */
    onSelect?: (value: T) => void
    /**
     * On blur handler
     */
    onBlur?: Handler
    /**
     * On focus handler
     */
    onFocus?: Handler
} & InputCommonProps<SelectRenderProps<T>>
