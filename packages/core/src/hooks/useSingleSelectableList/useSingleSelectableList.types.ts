export type UseSingleSelectableListOptions<ValueType> = {
    value?: ValueType | null
    list: Array<ValueType>

    onSelect?: (value: ValueType | null) => void
    onUnselect?: () => void
}

export type UseSingleSelectableListOutput<ValueType> = {
    value: ValueType | null
    valueIndex: number | null

    select: (value: ValueType | null) => void
}
