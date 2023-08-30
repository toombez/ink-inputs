import React from 'react'
import { useInput } from 'ink'
import { useBaseInput, useCursor } from '@hooks'
import type {
    RadioOption,
    RadioProps,
    RadioRenderProps,
} from './useRadio.types.js'

function useRadio<T>({
    options,
    onChange = () => {},
    value = null,
    ...useBaseInputOptions
}: RadioProps<T>): RadioRenderProps<T> {
    const {
        focus,
        isDisabled,
        isFocused,
    } = useBaseInput(useBaseInputOptions)

    const {
        moveCursor,
        cursorPosition,
    } = useCursor({ maxPosition: options.length })

    React.useEffect(() => {
        if (!value) {
            return
        }

        if (options.includes(value)) {
            return
        }

        select(null)
    }, [options])

    function select(option: RadioOption<T> | null) {
        onChange(option)
    }

    useInput((input, key) => {
        const isDownArrow = key.downArrow
        const isUpArrow = key.upArrow
        const isRightArrow = key.rightArrow
        const isLeftArrow = key.leftArrow
        const isEnter = key.return

        if (isDownArrow || isRightArrow) {
            moveCursor(1)
        }

        if (isUpArrow || isLeftArrow) {
            moveCursor(-1)
        }

        if (isEnter) {
            select(options.at(cursorPosition)!)
        }
    }, { isActive: isFocused })

    const selectedIndex = value ? options.indexOf(value) : null

    return {
        options,
        isDisabled,
        isFocused,
        selected: value,
        selectedIndex,
        cursorIndex: cursorPosition,

        select,
        focus,
    }
}

export { useRadio }
