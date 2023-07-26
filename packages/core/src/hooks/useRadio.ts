import React from 'react'
import { RadioProps, RadioRenderProps } from '@types'
import { useFocus, useInput } from 'ink'
import { clamp } from '@/utils.js'
import { useCursor } from './useCursor.js'

function useRadio<T>({
    options,
    focusOptions,

    onBlur = () => {},
    onChange = () => {},
    onFocus = () => {},
}: RadioProps<T>): RadioRenderProps<T> {
    const { isFocused } = useFocus(focusOptions)

    const {
        next,
        previous,
        position,
    } = useCursor({ maxPosition: options.length })
    const [selectedIndex, setSelectedIndex] = React.useState<number>(0)
    const selected = options.at(selectedIndex)!.value

    function select(optionIndex: number) {
        setSelectedIndex(() => optionIndex)
    }

    useInput((input, key) => {
        const isDownArrow = key.downArrow
        const isUpArrow = key.upArrow
        const isRightArrow = key.rightArrow
        const isLeftArrow = key.leftArrow
        const isEnter = key.return

        if (isDownArrow || isRightArrow) {
            next()
        }

        if (isUpArrow || isLeftArrow) {
            previous()
        }

        if (isEnter) {
            select(position)
        }
    }, { isActive: isFocused })

    React.useCallback(isFocused ? onBlur : onFocus, [isFocused])
    React.useCallback(() => onChange(selected), [selectedIndex])

    return {
        options,
        isFocused,
        selected,
        selectedIndex,
        cursorIndex: position,

        select,
    }
}

export { useRadio }
