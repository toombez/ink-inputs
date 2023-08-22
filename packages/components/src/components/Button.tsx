import React from 'react'
import { Text } from 'ink'
import { ButtonProps, useButton } from '@ink-inputs/core'
import { ButtonRenderProps, InkChildren } from '@ink-inputs/core'
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

const Button: React.FC<ButtonProps> = Composer({
    fallback: ButtonRenderFallback,
    hook: useButton
})

export default Button
