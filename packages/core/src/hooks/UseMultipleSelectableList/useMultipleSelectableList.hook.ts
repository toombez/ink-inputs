import { UseMultipleSelectableListOptions, UseMultipleSelectableListOutput } from "./useMultipleSelectableList.types.js";

const useMultipleSelectableList = <ValueType>({
    onSelect = () => {},
    onUnselect = () => {},
    onToggle = () => {},
    value = [],
    list,
}: UseMultipleSelectableListOptions<ValueType>
): UseMultipleSelectableListOutput<ValueType> => {
    const valueIndexes = value.map((value) => list.indexOf(value))

    function _select(valueToSelect: ValueType) {
        const newValue =[...value, valueToSelect]

        onSelect(newValue)

        return newValue
    }

    function _unselect(valueToUnselect: ValueType) {
        const newValue = value.filter((value) => value !== valueToUnselect)

        onUnselect(newValue)

        return newValue
    }

    function isValueSelected(valueToCheck: ValueType) {
        return value.includes(valueToCheck)
    }

    function select(valueToSelect: ValueType) {
        if (isValueSelected(valueToSelect)) {
            return
        }

        _select(valueToSelect)
    }

    function unselect(valueToUnselect: ValueType) {
        if (!isValueSelected(valueToUnselect)) {
            return
        }

        _unselect(valueToUnselect)
    }

    function toggle(valueToToggle: ValueType) {
        const handler = !isValueSelected(valueToToggle)
            ? _select
            : _unselect

        const newValue = handler(valueToToggle)

        onToggle(newValue)
    }

    return {
        select,
        unselect,
        toggle,
        isValueSelected,
        value,
        valueIndexes,
    }
}

export { useMultipleSelectableList }
