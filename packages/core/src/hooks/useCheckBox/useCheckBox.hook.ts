import React from 'react'
import { useInput } from 'ink'
import { UseBaseInput, useCursor } from '@hooks'
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
    } = UseBaseInput(useBaseInputOptions)

    const selectedIndexes = value.map((option) => options.indexOf(option))

    const {
        position,
        next,
        previous
    } = useCursor({
        maxPosition: options.length
    })

    function select(option: CheckBoxOption<T>) {
        onSelect(Array.from(new Set([...value, option])))
    }

    function unselect(option: CheckBoxOption<T>) {
        onSelect(value.filter((selectedOption) => selectedOption !== option))
    }

    const isCursorIndexSelected = value.includes(options.at(position)!)

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
            unselect(options.at(position)!)
        }

        if (isEnter && !isCursorIndexSelected) {
            select(options.at(position)!)
        }
    }, { isActive: isFocused })

    return {
        selected: value,
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
