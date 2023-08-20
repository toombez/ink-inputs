import { Handler, PropsBuilder } from "./global.types.js"

type SelectTypes<T> = PropsBuilder<{
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
}, {
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
}>

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
export type SelectRenderProps<T> = SelectTypes<T>['renderProps']

/**
 * Select props
 */
export type SelectProps<T> =  SelectTypes<T>['inputProps']
