import React from 'react'
import { useFocus, useInput } from 'ink'
import { ButtonProps, ButtonRenderProps } from '@types'
import { UseBaseInput } from './useBaseInput.js'

const useButton = ({
    onClick = () => {},
    label = '',

    ...useBaseInputOptions
}: ButtonProps): ButtonRenderProps => {
    const {
        isFocused,
        isDisabled,
        focus,
    } = UseBaseInput(useBaseInputOptions)

    function click() {
        onClick?.()
    }

    useInput((input, key) => {
        const isEnter = key.return
        const isSpace = input === ' '

        if (isEnter || isSpace) {
            click()
        }
    }, { isActive: isFocused })

    return {
        isFocused,
        isDisabled,
        label,

        click,
        focus,
    }
}

export { useButton }
export default useButton
