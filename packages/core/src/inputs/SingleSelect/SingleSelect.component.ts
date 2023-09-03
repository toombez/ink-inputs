import { useCursor, useCustomRenderElement, useFocusableElement, useOpenableElement } from "@hooks/index.js";
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
    onBlur = () => {},
    ...rest
}: SingleSelectProps<T>) => {
    const {
        focus,
        isFocused,
        isDisabled,
    } = useFocusableElement({
        ...rest,
        onBlur: () => {
            close()
            onBlur()
        }
    })

    const {
        Render,
    } = useCustomRenderElement({
        fallback: SingleSelectFallback,
        ...rest
    })

    const {
        cursorPosition,
        moveCursor,
        isCursorAtEnd,
        isCursorAtStart,
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

    const {
        close,
        isOpened,
        open,
        toggle,
    } = useOpenableElement({
        isAutoOpen,
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
    }, { isActive: isFocused })

    const change = select.bind(this)
    const submit = change

    const showedOptionsLowerBound = isCursorAtStart
        ? 0
        : isCursorAtEnd
            ? options.length - showCount
            : cursorPosition - Math.floor(showCount / 2)
    const showedOptionsUpperBound = isCursorAtEnd
        ? options.length
        : isCursorAtStart
            ? showCount
            : cursorPosition + Math.ceil(showCount / 2)

    const showedOptions = options
        .map<[Option<T>, number]>((option, index) => [option, index])
        .slice(showedOptionsLowerBound, showedOptionsUpperBound)

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
        showedOptions,
        change,
        submit,
        focus,
        open,
        close,
    })
}

export default SingleSelect
