import React, { useState } from 'react'
import { Box, Text, useInput } from "ink"

import { useFocusHandler, UseFocusHandlerProps } from '../hooks/useFocusHandler.js'

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

    const checkBoxSymbol = isChecked ? '□' : '■'

    useInput((input, key) => {
        const isEnterPressed = key.return
        const isSpacePressed = input === ' '

        if (isEnterPressed || isSpacePressed) {
            setIsChecked(!isChecked)
        }
    })

    return <Box>
        <Text>{checkBoxSymbol}</Text>
    </Box>
}

export default CheckBox
export { CheckBox }
