import type { PropsBuilder } from "@types"

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
    onSelect?: (value: SelectOption<T> | null) => void

    value?: SelectOption<T> | null
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
    selectedIndex: number | null
    /**
     * Selected option
     */
    selected: SelectOption<T> | null
    /**
     * Open select emitter
     */
    open: () => void
    /**
     * Close select emitter
     */
    close: () => void
    /**
     * Select emitter
     * @param delta new option index delta
     */
    select: (option: SelectOption<T> | null) => void

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

export type SelectProps<T> = SelectTypes<T>['InputProps']
export type SelectRenderProps<T> = SelectTypes<T>['RenderProps']
