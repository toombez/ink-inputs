import { useMultipleSelectableList, useCursor, useCustomRenderElement, useFocusableElement } from "@hooks/index.js";
import { CheckBoxProps, CheckBoxValue } from "./CheckBox.types.js";
import CheckBoxFallback from "./CheckBox.fallback.js";
import { useInput } from "ink";

const CheckBox = <T, >({
    options,
    value = [],
    onChange = () => {},
    onSubmit = () => {},
    placeholder = '',
    ...rest
}: CheckBoxProps<T>) => {
    const {
        focus,
        isDisabled,
        isFocused,
    } = useFocusableElement(rest)

    const {
        cursorPosition,
        moveCursor,
    } = useCursor({
        maxPosition: options.length - 1,
        isCyclic: false,
    })

    const {
        toggle,
        valueIndexes,
    } = useMultipleSelectableList({
        list: options,
        onToggle: onChange,
        value,
    })

    useInput((char, key) => {
        if (key.leftArrow || key.upArrow) {
            return moveCursor(-1)
        }

        if (key.rightArrow || key.downArrow) {
            return moveCursor(1)
        }

        if (key.return) {
            const optionUnderCursor = options.at(cursorPosition)!

            return change(optionUnderCursor)
        }
    }, { isActive: isFocused })

    const { Render } = useCustomRenderElement({
        fallback: CheckBoxFallback<T>,
        ...rest
    })

    const change = toggle
    const submit = toggle

    return Render({
        change,
        focus,
        isDisabled,
        isFocused,
        options,
        submit,
        value,
        valueIndexes,
        cursorPosition,
        placeholder,
    })
}

export default CheckBox
