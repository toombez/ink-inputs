import { UseMultipleSelectableListOptions, UseMultipleSelectableListOutput } from "./useMultipleSelectableList.types.js";

const useMultipleSelectableList = <Value>({
    onSelect = () => {},
    onUnselect = () => {},
    onToggle = () => {},
    value = [],
    list,
}: UseMultipleSelectableListOptions<Value>
): UseMultipleSelectableListOutput<Value> => {
    const valueIndexes = value.map((value) => list.indexOf(value))

    function _select(valueToSelect: Value) {
        const newValue =[...value, valueToSelect]

        onSelect(newValue)

        return newValue
    }

    function _unselect(valueToUnselect: Value) {
        const newValue = value.filter((value) => value !== valueToUnselect)

        onUnselect(newValue)

        return newValue
    }

    function isValueSelected(valueToCheck: Value) {
        return value.includes(valueToCheck)
    }

    function select(valueToSelect: Value) {
        if (isValueSelected(valueToSelect)) {
            return
        }

        _select(valueToSelect)
    }

    function unselect(valueToUnselect: Value) {
        if (!isValueSelected(valueToUnselect)) {
            return
        }

        _unselect(valueToUnselect)
    }

    function toggle(valueToToggle: Value) {
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
