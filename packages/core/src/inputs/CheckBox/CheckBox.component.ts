import { useCursor, useCustomRenderElement, useFocusableElement } from "@hooks/index.js";
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

    useInput((char, key) => {
        if (key.leftArrow || key.upArrow) {
            return moveCursor(-1)
        }

        if (key.rightArrow || key.downArrow) {
            return moveCursor(1)
        }

        if (key.return) {
            const optionUnderCursor = options.at(cursorPosition)!

            return change(Array.from(new Set([...value, optionUnderCursor])))
        }
    }, { isActive: isFocused })

    const { Render } = useCustomRenderElement({
        fallback: CheckBoxFallback<T>,
        ...rest
    })

    function change(value: CheckBoxValue<T>) {
        onChange(value)
    }

    function submit(value: CheckBoxValue<T>) {
        onSubmit(value)
    }

    const valueIndexes = options.map((option) => {
        return value.indexOf(option)
    })

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
