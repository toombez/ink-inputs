import React from 'react'
import { RadioProps, RadioRenderProps } from '@types'
import { useFocus, useInput } from 'ink'
import { clamp } from '@/utils.js'

function useRadio<T>({
    options,
    focusOptions,

    onBlur = () => {},
    onChange = () => {},
    onFocus = () => {},
}: RadioProps<T>): RadioRenderProps<T> {
    const { isFocused } = useFocus(focusOptions)

    const [selectedIndex, setSelectedIndex] = React.useState<number>(0)
    const selected = options.at(selectedIndex)!.value

    function select(delta: number) {
        const newIndex = clamp(selectedIndex + delta, options.length - 1, 0)

        setSelectedIndex(() => newIndex)
    }

    useInput((input, key) => {
        const isDownArrow = key.downArrow
        const isUpArrow = key.upArrow
        const isRightArrow = key.rightArrow
        const isLeftArrow = key.leftArrow

        if (isDownArrow || isRightArrow) {
            select(1)
        }

        if (isUpArrow || isLeftArrow) {
            select(-1)
        }
    }, { isActive: isFocused })

    React.useCallback(isFocused ? onBlur : onFocus, [isFocused])
    React.useCallback(() => onChange(selected), [selectedIndex])

    return {
        options,
        isFocused,
        selected,
        selectedIndex,

        select,
    }
}

export { useRadio }
