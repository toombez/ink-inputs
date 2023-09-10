/**
 * Ink-inputs `useSingleSelectableList` options
 *
 * @template Value type of option's value
 */
export type UseSingleSelectableListOptions<Value> = {
    value?: Value | null
    list: Array<Value>

    onSelect?: (value: Value | null) => void
    onUnselect?: () => void
}

/**
 * Ink-inputs `useSingleSelectableList` output
 *
 * @template Value type of option's value
 */
export type UseSingleSelectableListOutput<Value> = {
    value: Value | null
    valueIndex: number | null

    select: (value: Value | null) => void
}
