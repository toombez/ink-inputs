import { UseSingleSelectableListOptions, UseSingleSelectableListOutput } from "./useSingleSelectableList.types.js";

const useSingleSelectableList = <ValueType>({
    list,
    value = null,

    onSelect = () => {},
}: UseSingleSelectableListOptions<ValueType>): UseSingleSelectableListOutput<ValueType> => {
    const valueIndex = value ? list.indexOf(value) : null

    function select(value: ValueType | null) {
        onSelect(value)
    }
    return {
        value,
        valueIndex,
        select,
    }
}

export { useSingleSelectableList }
