import { useCursor, useCustomRenderElement, useFocusableElement } from "@hooks/index.js";
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
    const valueIndex = value ? options.indexOf(value) : null

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

    function change(value: Option<T> | null) {
        onChange(value)
    }

    function submit(value: Option<T> | null) {
        onSubmit(value)
    }

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
