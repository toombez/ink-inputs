import { useCursor, useCustomRenderElement, useFocusableElement } from "@hooks/index.js";
import { SingleSelectProps } from "./SingleSelect.types.js";
import SingleSelectFallback from "./SingleSelect.fallback.js";
import { Option } from "@types";
import { ReactElement, useState } from "react";
import { useInput } from "ink";
import { useSingleSelectableList } from "@hooks/useSingleSelectableList/useSingleSelectableList.hook.js";

const SHOW_COUNT_DEFAULT = 3

const SingleSelect = <T, >({
    options,
    value = null,
    showCount = SHOW_COUNT_DEFAULT,
    onChange = () => {},
    onSubmit = () => {},
    isAutoOpen = false,
    placeholder = '',
    ...rest
}: SingleSelectProps<T>) => {
    const [isOpened, setIsOpened] = useState(isAutoOpen)

    const {
        focus,
        isFocused,
        isDisabled,
    } = useFocusableElement(rest)

    const {
        Render,
    } = useCustomRenderElement({
        fallback: SingleSelectFallback,
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
            return change(options.at(cursorPosition)!)
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
        showCount,
        valueIndex,
        change,
        submit,
        focus,
        open,
        close,
    })
}

export default SingleSelect
