/**
 * Ink-inputs `useSingleSelectableList` options
 */
export type UseSingleSelectableListOptions<ValueType> = {
    value?: ValueType | null
    list: Array<ValueType>

    onSelect?: (value: ValueType | null) => void
    onUnselect?: () => void
}

/**
 * Ink-inputs `useSingleSelectableList` output
 */
export type UseSingleSelectableListOutput<ValueType> = {
    value: ValueType | null
    valueIndex: number | null

    select: (value: ValueType | null) => void
}
