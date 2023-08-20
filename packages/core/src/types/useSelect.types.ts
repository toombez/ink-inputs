import { Handler, BaseInputProps, BaseRenderProps } from "./global.types.js"

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

    cursorIndex: number
} & BaseRenderProps

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
} & BaseInputProps<SelectRenderProps<T>>
