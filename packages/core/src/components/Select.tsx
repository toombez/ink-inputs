import React from 'react'
import { Box, Text } from 'ink'
import { useRender } from '@hooks/useRender.js'
import { useSelect } from '@hooks/useSelect.js'
import { InkChildren, SelectProps, SelectRenderProps } from '@types'

function SelectRenderFallback<T>({
    isFocused,
    isOpened,
    options,
    selectedIndex,
    showCount,
}: SelectRenderProps<T>): InkChildren {
    const selected = options.at(selectedIndex)!.label

    return (
        <Box
            borderColor={isFocused ? 'red' : 'cyan'}
            borderStyle='double'
            position='relative'
        >
            <Text>
                {selected}
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
                    >
                        {option.label}
                    </Text>
                ))}
            </Box>
        </Box>
    )
}

const Select = <T, >(props: SelectProps<T>): InkChildren => {
    const renderProps = useSelect(props)

    const { Render } = useRender(props, SelectRenderFallback<T>)

    return <Render {...renderProps} />
}

export default Select
