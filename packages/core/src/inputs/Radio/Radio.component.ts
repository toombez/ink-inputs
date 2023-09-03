import { useCursor, useCustomRenderElement, useFocusableElement, useSingleSelectableList } from "@hooks/index.js";
import { RadioProps } from "./Radio.types.js";
import RadioFallback from "./Radio.fallback.js";
import { Option } from "@types";
import { ReactElement, useState } from "react";
import { useInput } from "ink";

const Radio = <T, >({
    options,
    value = null,
    onChange = () => {},
    onSubmit = () => {},
    placeholder = '',
    ...rest
}: RadioProps<T>) => {
    const {
        focus,
        isFocused,
        isDisabled,
    } = useFocusableElement(rest)

    const {
        Render,
    } = useCustomRenderElement({
        fallback: RadioFallback<T>,
        ...rest
    })

    const {
        cursorPosition,
        moveCursor,
    } = useCursor({
        maxPosition: options.length - 1,
        isCyclic: false,
    })

    const {
        select,
        valueIndex,
    } = useSingleSelectableList({
        list: options,
        onSelect: onChange,
        onUnselect: () => onChange(null),
        value,
    })

    useInput((char, key) => {
        if (key.downArrow || key.rightArrow) {
            return moveCursor(1)
        }

        if (key.upArrow || key.leftArrow) {
            return moveCursor(-1)
        }

        if (key.return || char === ' ') {
            return change(options.at(cursorPosition)!)
        }
    }, { isActive: isFocused })

    const change = select
    const submit = change

    return Render({
        options,
        value,
        isDisabled,
        isFocused,
        placeholder,
        cursorPosition,
        valueIndex,
        change,
        submit,
        focus,
    })
}

export default Radio
