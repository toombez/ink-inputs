import React from 'react'
import { Box, Text } from 'ink';
import figureSet from 'figures';
import { CheckBoxProps, CheckBoxRenderProps, InkChildren, useCheckBox, useRender } from '@ink-inputs/core';

function CheckBoxRenderFallback<T>({
    options,
    cursorIndex,
    selectedIndexes,
}: CheckBoxRenderProps<T>): InkChildren {
    return (
        <Box gap={1}>
            {options.map((option, index) => (
                <Text underline={index === cursorIndex}>
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

function CheckBox<T>(props: CheckBoxProps<T>) {
    const renderProps = useCheckBox(props)

    const { Render } = useRender(props, CheckBoxRenderFallback<T>)

    return <Render {...renderProps} />
}

export default CheckBox
