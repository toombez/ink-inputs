import React from 'react'
import { Text } from 'ink'
import { useButton, useRender } from '@ink-inputs/core'
import { ButtonRenderProps, InkChildren, ButtonProps } from '@ink-inputs/core'
import Composer from './Composer.js'

function ButtonRenderFallback({
    label,
    isFocused,
}: ButtonRenderProps): InkChildren {
    return (
        <Text underline={isFocused}>
            {label}
        </Text>
    )
}

const Button = Composer({
    fallback: ButtonRenderFallback,
    hook: useButton
})

export default Button
