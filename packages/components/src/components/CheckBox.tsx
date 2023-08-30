import React from 'react'
import { Box, Text } from 'ink';
import figureSet from 'figures';
import { CheckBoxProps, CheckBoxRenderProps, InkChildren, useCheckBox, useRender } from '@ink-inputs/core';
import Composer from './Composer.js';

function CheckBoxRenderFallback<T>({
    options,
    cursorIndex,
    selectedIndexes,
    selected,
}: CheckBoxRenderProps<T>): InkChildren {
    return (
        <Box gap={1}>
            {options.map((option, index) => (
                <Text key={index} underline={index === cursorIndex}>
                    {selectedIndexes.includes(index)
                        ? figureSet.checkboxOn
                        : figureSet.checkboxOff
                    }
                    {' '}
                    {option.label}
                </Text>
            ))}
        </Box>
    )
}

const CheckBox = <T, >(props: CheckBoxProps<T>): InkChildren => {
    const Composition = Composer({
        fallback: CheckBoxRenderFallback,
        hook: useCheckBox<T>,
    })

    return <Composition {...props} />
}

export default CheckBox
