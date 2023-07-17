import React from 'react'
import { CheckBoxProps, CheckBoxRenderProps } from '@types';
import { useFocus, useInput } from 'ink';
import { clamp } from '@/utils.js';

function useCheckBox<T>({
    options,
    focusOptions,
    onSelect = () => {},
    onBlur = () => {},
    onFocus = () => {},
}: CheckBoxProps<T>): CheckBoxRenderProps<T> {
    const { isFocused } = useFocus(focusOptions)

    const [selectedIndexes, setSelectedIndexes] = React.useState<number[]>([])
    const selected = selectedIndexes
        .map((optionIndex) => options.at(optionIndex)!.value)

    const [cursorIndex, setCursorIndex] = React.useState<number>(0)
    const isCursorIndexSelected = selectedIndexes.includes(cursorIndex)


    function select(index: number) {
        setSelectedIndexes((indexes) => {
            const set = new Set([...indexes, index])
            const newIndexes = [...set.values()]

            return newIndexes
        })
    }

    function unselect(element: T) {
        const optionIndex = options
            .map((option) => option.value)
            .indexOf(element)

        setSelectedIndexes((indexes) => {
            return indexes.filter((index) => index !== optionIndex)
        })
    }

    React.useCallback(() => onSelect(selected), [selectedIndexes])
    React.useCallback(() => isFocused ? onBlur : onFocus, [isFocused])

    useInput((input, key) => {
        const isEnter = key.return
        const isDownArrow = key.downArrow
        const isUpArrow = key.upArrow
        const isLeftArrow = key.leftArrow
        const isRightArrow = key.rightArrow

        if (isDownArrow || isRightArrow) {
            setCursorIndex((currentIndex) => {
                return clamp(currentIndex + 1, options.length - 1, 0)
            })
        }

        if (isUpArrow || isLeftArrow) {
            setCursorIndex((currentIndex) => {
                return clamp(currentIndex - 1, options.length - 1, 0)
            })
        }

        if (isEnter && isCursorIndexSelected) {
            unselect(options.at(cursorIndex)!.value)
        }

        if (isEnter && !isCursorIndexSelected) {
            select(cursorIndex)
        }
    }, { isActive: isFocused })

    return {
        selected,
        selectedIndexes,
        isFocused,
        options,
        cursorIndex,

        select,
        unselect,
    }
}

export { useCheckBox }
