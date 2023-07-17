import React from 'react'
import { CheckBoxProps, CheckBoxRenderProps, InkChildren } from '@types';
import { Box, Text } from 'ink';
import figureSet from 'figures';
import { useCheckBox } from '@hooks/useCheckBox.js';
import { useRender } from '@hooks/useRender.js';

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
