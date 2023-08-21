import React from 'react'
import { RadioProps, RadioRenderProps } from '@types'
import { useFocus, useInput } from 'ink'
import { clamp } from '@/utils.js'
import { useCursor } from './useCursor.js'
import { UseBaseInput } from './useBaseInput.js'

function useRadio<T>({
    options,
    onChange = () => {},
    ...useBaseInputOptions
}: RadioProps<T>): RadioRenderProps<T> {

    const {
        focus,
        isDisabled,
        isFocused,
    } = UseBaseInput(useBaseInputOptions)

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

    React.useCallback(() => onChange(selected), [selectedIndex])

    return {
        options,
        isDisabled,
        isFocused,
        selected,
        selectedIndex,
        cursorIndex: position,

        select,
        focus,
    }
}

export { useRadio }
