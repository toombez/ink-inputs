import React from 'react'
import { Box, Text } from 'ink'
import { InkChildren, SelectProps, SelectRenderProps, useRender, useSelect } from '@ink-inputs/core'
import Composer from './Composer.js'

function SelectRenderFallback<T>({
    isFocused,
    isOpened,
    selected,
    options,
    selectedIndex,
    cursorIndex,
}: SelectRenderProps<T>): InkChildren {
    return (
        <Box
            borderColor={isFocused ? 'red' : 'cyan'}
            borderStyle='double'
            position='relative'
        >
            <Text>
                {selected?.label || 'lorem'}
            </Text>
            <Box
                display={isOpened ? 'flex' : 'none'}
                flexDirection='column'
                position='absolute'
                marginTop={1}
            >
                {options.map((option, index) => (
                    <Text
                        key={index}
                        underline={selectedIndex === index}
                        backgroundColor={cursorIndex === index ? 'gray' : 'black'}
                    >
                        {index}|{cursorIndex}{option.label}
                    </Text>
                ))}
            </Box>
        </Box>
    )
}

const Select = <T, >(props: SelectProps<T>): InkChildren => {
    const Composition = Composer({
        fallback: SelectRenderFallback,
        hook: useSelect<T>,
    })

    return <Composition {...props} />
}

export default Select
