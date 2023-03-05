import React, { useState } from 'react'
import { Box, Text, useInput } from "ink"

import { useFocusHandler, UseFocusHandlerProps } from '../hooks/useFocusHandler.js'

interface CheckBoxIndicatorProps {
    isChecked?: boolean
}

const CheckBoxIndicator: React.FC<CheckBoxIndicatorProps> = ({
    isChecked,
}) => {
    const checkBoxSymbol = isChecked ? '□' : '■'

    return <Text>{ checkBoxSymbol }</Text>
}

interface CheckBoxProps {
    onFocus?: UseFocusHandlerProps['handler'],
    focusOptions?: UseFocusHandlerProps['focusOptions']
}

const CheckBox: React.FC<CheckBoxProps> = ({
    onFocus,
    focusOptions,
}) => {
    useFocusHandler({ handler: onFocus, focusOptions })

    const [isChecked, setIsChecked] = useState(false)

    useInput((input, key) => {
        const isEnterPressed = key.return
        const isSpacePressed = input === ' '

        if (isEnterPressed || isSpacePressed) {
            setIsChecked(!isChecked)
        }
    })

    return <Box>
        <CheckBoxIndicator isChecked={isChecked} />
    </Box>
}

export default CheckBox
export type {
    CheckBoxIndicatorProps,
    CheckBoxProps,
}
export {
    CheckBoxIndicator,
    CheckBox,
}
