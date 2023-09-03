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
    isAutoOpen = false,
    placeholder = '',
    ...rest
}: RadioProps<T>) => {
    const [isOpened, setIsOpened] = useState(isAutoOpen)

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
        if (!isOpened && (key.return || char === ' ')) {
            return open()
        }

        if (isOpened && key.escape) {
            return close()
        }

        if (isOpened && (key.downArrow || key.rightArrow)) {
            return moveCursor(1)
        }

        if (isOpened && (key.upArrow || key.leftArrow)) {
            return moveCursor(-1)
        }

        if (isOpened && (key.return || char === ' ')) {
            return change(options.at(cursorPosition) || null)
        }
    })

    const change = select.bind(this)
    const submit = change

    function open() {
        setIsOpened(true)
    }

    function close() {
        setIsOpened(false)
    }

    return Render({
        options,
        value,
        isDisabled,
        isFocused,
        isOpened,
        placeholder,
        cursorPosition,
        valueIndex,
        change,
        submit,
        focus,
        open,
        close,
    })
}

export default Radio
