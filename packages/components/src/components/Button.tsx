import React from 'react'
import { Text } from 'ink'
import { useButton } from '@ink-inputs/core'
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

const Button: React.FC<ButtonRenderProps> = Composer({
    fallback: ButtonRenderFallback,
    hook: useButton
})

export default Button
