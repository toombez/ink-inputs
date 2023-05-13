import { useEffect } from 'react'
import { useFocus, useInput } from 'ink'
import { useFocusOptions } from '@types'

export interface UseButtonOptions {
    clickHandler?: () => void
    focusHandler?: () => void
    blurHandler?: () => void

    focusOptions?: useFocusOptions
}

export const useButton = ({
    blurHandler,
    clickHandler,
    focusHandler,

    focusOptions,
}: UseButtonOptions) => {
    const { isFocused, focus } = useFocus(focusOptions)

    useEffect(() => {
        const handler = isFocused ? focusHandler : blurHandler

        handler?.()
    }, [isFocused])

    useInput((input, key) => {
        const isEnterPressed = key.return
        const isSpacePressed = input === ' '

        if (isEnterPressed || isSpacePressed) {
            clickHandler?.()
        }
    }, { isActive: isFocused })

    return {
        isFocused,
        focus,
    }
}
