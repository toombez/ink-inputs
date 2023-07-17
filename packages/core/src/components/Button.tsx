import React from 'react'
import { Text } from 'ink'
import { useButton, useRender } from '@hooks'
import { ButtonProps, ButtonRenderProps, InkChildren } from '@types'

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

function Button(props: ButtonProps): InkChildren {
    const renderProps = useButton(props)

    const { Render } = useRender(props, ButtonRenderFallback)

    return <Render {...renderProps} />
}

export default Button
