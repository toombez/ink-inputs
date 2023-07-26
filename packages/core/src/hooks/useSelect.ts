import React from 'react'
import { useFocus, useInput } from 'ink'
import { clamp } from '@/utils.js'
import { SelectProps, SelectRenderProps, UseFocusOptions } from '@types'
import { useCursor } from './useCursor.js'

function useSelect<T>({
    focusOptions,
    options,
    showCount = 3,

    onBlur = () => {},
    onFocus = () => {},
    onSelect = () => {},
}: SelectProps<T>): SelectRenderProps<T> {
    const minSelectedIndex = 0
    const maxSelectedIndex = options.length - 1

    const {
        next,
        previous,
        position,
    } = useCursor({ maxPosition: options.length })
    const [selectedIndex, setSelectedIndex] = React.useState<number>(0)
    const [isOpened, setIsOpened] = React.useState(false)

    const selected = options.at(selectedIndex)!

    const { isFocused, focus } = useFocus(focusOptions)

    function open() {
        setIsOpened(() => true)
    }

    function close() {
        setIsOpened(() => false)
    }

    function select(optionIndex: number) {
        setSelectedIndex(() => optionIndex)
    }

    useInput((input, key) => {
        const isDownArrow = key.downArrow
        const isUpArrow = key.upArrow
        const isRightArrow = key.rightArrow
        const isLeftArrow = key.leftArrow
        const isEnter = key.return
        const isSpace = input === ' '
        const isEsc = key.escape

        if ((isDownArrow || isRightArrow) && isOpened) {
            next()
        }

        if ((isUpArrow || isLeftArrow) && isOpened) {
            previous()
        }

        if (!isOpened && (isEnter || isSpace)) {
            return open()
        }

        if (isEsc && isOpened) {
            return close()
        }

        if (isEnter && isOpened) {
            return select(position)
        }
    }, { isActive: isFocused })

    React.useCallback(() => onSelect(selected.value), [selectedIndex])
    React.useCallback(isFocused ? onFocus : onBlur, [isFocused])

    return {
        isFocused,
        isOpened,
        selectedIndex,
        selected,
        options,
        showCount,
        cursorIndex: position,

        select,
        open,
        close,
    }
}

export { useSelect }
