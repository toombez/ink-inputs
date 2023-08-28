import React from 'react'
import { useInput } from 'ink'
import { UseBaseInput, useCursor } from '@hooks'
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
    } = UseBaseInput(useBaseInputOptions)

    const {
        next,
        previous,
        position,
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
            next()
        }

        if (isUpArrow || isLeftArrow) {
            previous()
        }

        if (isEnter) {
            select(options.at(position)!)
        }
    }, { isActive: isFocused })

    const selectedIndex = value ? options.indexOf(value) : null

    return {
        options,
        isDisabled,
        isFocused,
        selected: value,
        selectedIndex,
        cursorIndex: position,

        select,
        focus,
    }
}

export { useRadio }
