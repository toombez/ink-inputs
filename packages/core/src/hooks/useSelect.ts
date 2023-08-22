import React from 'react'
import { useInput } from 'ink'
import { useCursor } from './useCursor.js'
import { UseBaseInput } from './useBaseInput.js'
import { PropsBuilder } from '@types'

type SelectTypes<T> = PropsBuilder<{
    /**
     * Select options
     */
    options: SelectOption<T>[]
    /**
     * Count options to show
     */
    showCount?: number
    /**
     * On select handler
     * @param value selected option value
     * @returns void
     */
    onSelect?: (value: T) => void
    /**
     * On blur handler
     */
}, {
    /**
     * Is opened select
     */
    isOpened: boolean
    /**
     * Select options
     */
    options: SelectOption<T>[]
    /**
     * Count options to show
     */
    showCount: number
    /**
     * Selected index
     */
    selectedIndex: number
    /**
     * Selected option
     */
    selected: SelectOption<T>
    /**
     * Open select emitter
     */
    open: () => void
    /**
     * Close select emitter
     */
    close: () => void
    /**
     * Select emitter
     * @param delta new option index delta
     */
    select: (delta: number) => void

    cursorIndex: number
}>

/**
 * Select option
 */
export interface SelectOption<T> {
    /**
     * Option value
     */
    value: T
    /**
     * Option label
     */
    label: string
}

export type SelectProps<T> = SelectTypes<T>['InputProps']
export type SelectRenderProps<T> = SelectTypes<T>['RenderProps']

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
