/**
 * Ink-inputs `useMultipleSelectableList` options
 *
 * @template Value type of option's value
 */
export type UseMultipleSelectableListOptions<Value> = {
    list: Array<Value>
    value?: Array<Value>

    onSelect?: (value: Array<Value>) => void
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

    value: Array<Value>
    valueIndexes: Array<number>
}
