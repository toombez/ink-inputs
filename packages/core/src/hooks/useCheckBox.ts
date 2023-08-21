import React from 'react'
import { CheckBoxProps, CheckBoxRenderProps } from '@types';
import { useFocus, useInput } from 'ink';
import { useCursor } from './useCursor.js';
import { UseBaseInput } from './useBaseInput.js';

function useCheckBox<T>({
    options,
    focusOptions,
    onSelect = () => {},

    ...useBaseInputOptions
}: CheckBoxProps<T>): CheckBoxRenderProps<T> {
    const {
        focus,
        isDisabled,
        isFocused,
    } = UseBaseInput(useBaseInputOptions)

    const [selectedIndexes, setSelectedIndexes] = React.useState<number[]>([])
    const selected = selectedIndexes
        .map((optionIndex) => options.at(optionIndex)!.value)

    const { position, next, previous } = useCursor({
        maxPosition: options.length
    })
    const isCursorIndexSelected = selectedIndexes.includes(position)

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

    useInput((input, key) => {
        const isEnter = key.return
        const isDownArrow = key.downArrow
        const isUpArrow = key.upArrow
        const isLeftArrow = key.leftArrow
        const isRightArrow = key.rightArrow

        if (isDownArrow || isRightArrow) {
            next()
        }

        if (isUpArrow || isLeftArrow) {
            previous()
        }

        if (isEnter && isCursorIndexSelected) {
            unselect(options.at(position)!.value)
        }

        if (isEnter && !isCursorIndexSelected) {
            select(position)
        }
    }, { isActive: isFocused })

    return {
        selected,
        selectedIndexes,
        isFocused,
        isDisabled,
        options,
        cursorIndex: position,

        select,
        unselect,
        focus,
    }
}

export { useCheckBox }
