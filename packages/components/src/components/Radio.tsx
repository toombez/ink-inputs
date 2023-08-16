import React from 'react'
import { Box, Text } from 'ink'
import figureSet from 'figures'
import { InkChildren, RadioProps, RadioRenderProps, useRadio, useRender } from '@ink-inputs/core'

function RadioRenderFallback<T>({
    selectedIndex,
    cursorIndex,
    options,
}: RadioRenderProps<T>): InkChildren {
    return (
        <Box flexDirection='column'>
            {options.map((option, index) => (
                <Text key={index} underline={index === cursorIndex}>
                    {index === selectedIndex ? figureSet.radioOn : figureSet.radioOff}
                    {' '}
                    {option.label}
                </Text>
            ))}
        </Box>
    )
}

function Radio<T>(props: RadioProps<T>): InkChildren {
    const renderProps = useRadio(props)

    const { Render } = useRender(props, RadioRenderFallback)

    return <Render {...renderProps} />
}

export default Radio
