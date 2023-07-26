import React from 'react'
import { InkChildren, RadioProps, RadioRenderProps } from '@types'
import { useRadio } from '@hooks/useRadio.js'
import { useRender } from '@hooks/useRender.js'
import { Box, Text } from 'ink'
import figureSet from 'figures'

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
