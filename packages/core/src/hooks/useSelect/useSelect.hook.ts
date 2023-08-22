import React from 'react'
import { useInput } from 'ink'
import { SelectProps, SelectRenderProps } from './useSelect.types.js'
import { UseBaseInput, useCursor } from '@hooks'

function useSelect<T>({
    options,
    showCount = 3,

    onSelect = () => {},
    ...useBaseInputOptions
}: SelectProps<T>): SelectRenderProps<T> {
    const minSelectedIndex = 0
    const maxSelectedIndex = options.length - 1

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
    const [isOpened, setIsOpened] = React.useState(false)

    const selected = options.at(selectedIndex)!

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

    return {
        isFocused,
        isDisabled,
        isOpened,
        selectedIndex,
        selected,
        options,
        showCount,
        cursorIndex: position,

        select,
        open,
        close,
        focus,
    }
}

export { useSelect }
