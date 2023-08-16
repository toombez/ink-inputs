import React from 'react'
import { Box, Text } from 'ink'
import figureSet from 'figures'
import { InkChildren, RadioProps, RadioRenderProps, useRadio, useRender } from '@ink-inputs/core'
import Composer from './Composer.js'

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

const Radio = <T, >(props: RadioProps<T>): InkChildren => {
    const Composition = Composer({
        fallback: RadioRenderFallback,
        hook: useRadio<T>,
    })

    return <Composition {...props} />
}

export default Radio
