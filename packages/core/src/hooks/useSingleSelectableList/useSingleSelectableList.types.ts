/**
 * Ink-inputs `useSingleSelectableList` options
 *
 * @template Value type of option's value
 */
export type UseSingleSelectableListOptions<Value> = {
    /**
     * Selected option
     */
    value?: Value | null

    /**
     * List of options from which to choose
     */
    list: Array<Value>

    /**
     * Handler that is triggered when a new option is selected
     * @param value new selected option
     * @returns
     */
    onSelect?: (value: Value | null) => void

    /**
     * Handler that is triggered when a selected options is unselected
     * @returns
     */
    onUnselect?: () => void
}

/**
 * Ink-inputs `useSingleSelectableList` output
 *
 * @template Value type of option's value
 */
export type UseSingleSelectableListOutput<Value> = {
    /**
     * Selected option
     */
    value: Value | null

    /**
     * Selected option index
     */
    valueIndex: number | null

    select: (value: Value | null) => void
}
