import React from 'react'
import { InkChildren, InputProps, InputRenderProps } from '@types'
import { useInput } from '@hooks/useInput.js'
import { useRender } from '@hooks/useRender.js'
import { Box, Text } from 'ink'

function InputRenderFallback({
    value,
    isFocused,
}: InputRenderProps): InkChildren {
    return (
        <Box minHeight={1}>
            <Text
                underline={isFocused}
            >
                {value}
            </Text>
        </Box>
    )
}

function Input(props: InputProps): InkChildren {
    const renderProps = useInput(props)

    const { Render } = useRender(props, InputRenderFallback)

    return <Render {...renderProps} />
}

export default Input
