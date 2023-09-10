/**
 * Ink-inputs `useMultipleSelectableList` options
 */
export type UseMultipleSelectableListOptions<ValueType> = {
    list: Array<ValueType>
    value?: Array<ValueType>

    onSelect?: (value: Array<ValueType>) => void
    onUnselect?: (value: Array<ValueType>) => void
    onToggle?: (value: Array<ValueType>) => void
}

/**
 * Ink-inputs `useMultipleSelectableList` output
 */
export type UseMultipleSelectableListOutput<ValueType> = {
    select: (valueToSelect: ValueType) => void
    unselect: (valueToUnselect: ValueType) => void
    toggle: (valueToToggle: ValueType) => void
    isValueSelected: (value: ValueType) => boolean

    value: Array<ValueType>
    valueIndexes: Array<number>
}
