/**
 * Ink-inputs `useMultipleSelectableList` options
 *
 * @template Value type of option's value
 */
export type UseMultipleSelectableListOptions<Value> = {
    /**
     * List of options from which to choose
     */
    list: Array<Value>

    /**
     * Selected options array
     */
    value?: Array<Value>

    /**
     * Handler that is triggered when a new option is selected
     * @param value new array of selected options
     * @returns
     */
    onSelect?: (value: Array<Value>) => void

    /**
     * Handler that is triggered when a selected options is unselected
     * @param value new array of selected options
     * @returns
     */
    onUnselect?: (value: Array<Value>) => void

    onToggle?: (value: Array<Value>) => void
}

/**
 * Ink-inputs `useMultipleSelectableList` output
 *
 * @template Value type of option's value
 */
export type UseMultipleSelectableListOutput<Value> = {
    select: (valueToSelect: Value) => void
    unselect: (valueToUnselect: Value) => void
    toggle: (valueToToggle: Value) => void
    isValueSelected: (value: Value) => boolean

    /**
     * Selected options array
     */
    value: Array<Value>

    /**
     * Selected option indexes array
     */
    valueIndexes: Array<number>
}
