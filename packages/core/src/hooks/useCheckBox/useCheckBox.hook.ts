import React from 'react'
import { useInput } from 'ink'
import { useBaseInput, useCursor } from '@hooks'
import type {
    CheckBoxOption,
    CheckBoxProps,
    CheckBoxRenderProps,
} from './useCheckBox.types.js'

function useCheckBox<T>({
    options,
    onSelect = () => {},
    value = [],

    ...useBaseInputOptions
}: CheckBoxProps<T>): CheckBoxRenderProps<T> {
    const {
        focus,
        isDisabled,
        isFocused,
    } = useBaseInput(useBaseInputOptions)

    const selectedIndexes = value.map((option) => options.indexOf(option))

    const {
        cursorPosition,
        moveCursor,
    } = useCursor({
        maxPosition: options.length - 1,
    })

    function select(option: CheckBoxOption<T>) {
        onSelect(Array.from(new Set([...value, option])))
    }

    function unselect(option: CheckBoxOption<T>) {
        onSelect(value.filter((selectedOption) => selectedOption !== option))
    }

    const isCursorIndexSelected = value.includes(options.at(cursorPosition)!)

    useInput((char, key) => {
        const isEnter = key.return
        const isDownArrow = key.downArrow
        const isUpArrow = key.upArrow
        const isLeftArrow = key.leftArrow
        const isRightArrow = key.rightArrow

        if (isDownArrow || isRightArrow) {
            moveCursor(1)
        }

        if (isUpArrow || isLeftArrow) {
            moveCursor(-1)
        }

        if (isEnter && isCursorIndexSelected) {
            unselect(options.at(cursorPosition)!)
        }

        if (isEnter && !isCursorIndexSelected) {
            select(options.at(cursorPosition)!)
        }
    }, { isActive: isFocused })

    return {
        selected: value,
        selectedIndexes,
        isFocused,
        isDisabled,
        options,
        cursorIndex: cursorPosition,

        select,
        unselect,
        focus,
    }
}

export { useCheckBox }
