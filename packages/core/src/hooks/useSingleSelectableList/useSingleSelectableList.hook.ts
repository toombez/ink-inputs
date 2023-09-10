import { UseSingleSelectableListOptions, UseSingleSelectableListOutput } from "./useSingleSelectableList.types.js";

const useSingleSelectableList = <Value>({
    list,
    value = null,

    onSelect = () => {},
}: UseSingleSelectableListOptions<Value>): UseSingleSelectableListOutput<Value> => {
    const valueIndex = value ? list.indexOf(value) : null

    function select(value: Value | null) {
        onSelect(value)
    }
    return {
        value,
        valueIndex,
        select,
    }
}

export { useSingleSelectableList }
