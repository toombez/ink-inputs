import React from 'react'
import { useFocus, useInput } from 'ink'
import { UseBaseInput } from './useBaseInput.js'
import { PropsBuilder } from '@types'

type ButtonTypes = PropsBuilder<{
    /**
     * Click handler
     */
    onClick?: () => void

    /**
     * Button label
     */
    label?: string
}, {
    /**
     * Button label
     */
    label: string
    /**
     * Click emitter
     */
    click: () => void
}>

export type ButtonProps = ButtonTypes['InputProps']
export type ButtonRenderProps = ButtonTypes['RenderProps']

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
