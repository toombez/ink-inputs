import React from 'react'
import { useInput } from 'ink'
import { SelectOption, SelectProps, SelectRenderProps } from './useSelect.types.js'
import { useBaseInput, useCursor } from '@hooks'

function useSelect<T>({
    options,
    showCount = 3,

    onSelect = () => {},
    value = null,
    ...useBaseInputOptions
}: SelectProps<T>): SelectRenderProps<T> {
    const minSelectedIndex = 0
    const maxSelectedIndex = options.length - 1

    const {
        focus,
        isDisabled,
        isFocused,
    } = useBaseInput(useBaseInputOptions)

    const {
        moveCursor,
        cursorPosition,
    } = useCursor({ maxPosition: options.length })
    const [isOpened, setIsOpened] = React.useState(false)

    function open() {
        setIsOpened(() => true)
    }

    function close() {
        setIsOpened(() => false)
    }

    function select(option: SelectOption<T> | null) {
        if (option !== null && !options.includes(option)) {
            return
        }

        onSelect?.(option)
    }

    React.useEffect(() => {
        if (!value) {
            return
        }

        if (options.includes(value)) {
            return
        }

        select(null)
    }, [options])

    useInput((input, key) => {
        const isDownArrow = key.downArrow
        const isUpArrow = key.upArrow
        const isRightArrow = key.rightArrow
        const isLeftArrow = key.leftArrow
        const isEnter = key.return
        const isSpace = input === ' '
        const isEsc = key.escape

        if ((isDownArrow || isRightArrow) && isOpened) {
            moveCursor(1)
        }

        if ((isUpArrow || isLeftArrow) && isOpened) {
            moveCursor(-1)
        }

        if (!isOpened && (isEnter || isSpace)) {
            return open()
        }

        if (isEsc && isOpened) {
            return close()
        }

        if (isEnter && isOpened) {
            return select(options.at(cursorPosition)!)
        }
    }, { isActive: isFocused })

    const selectedIndex = value ? options.indexOf(value) : null

    return {
        isFocused,
        isDisabled,
        isOpened,
        options,
        showCount,
        cursorIndex: cursorPosition,
        selected: value,
        selectedIndex,

        select,
        open,
        close,
        focus,
    }
}

export { useSelect }
