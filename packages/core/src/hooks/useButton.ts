import React from 'react'
import { useFocus, useInput } from 'ink'
import { ButtonProps, ButtonRenderProps } from '@types'

const useButton = ({
    onClick = () => {},
    onBlur = () => {},
    onFocus = () => {},

    focusOptions,
    label = '',
}: ButtonProps): ButtonRenderProps => {
    const { isFocused, focus } = useFocus(focusOptions)

    React.useCallback(isFocused ? onFocus : onBlur, [isFocused])

    useInput((input, key) => {
        const isEnter = key.return
        const isSpace = input === ' '

        if (isEnter || isSpace) {
            onClick?.()
        }
    }, { isActive: isFocused })

    return {
        isFocused,
        label,
    }
}

export { useButton }
export default useButton
