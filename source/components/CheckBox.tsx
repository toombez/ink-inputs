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
    onFocus?: UseFocusHandlerProps['handler']
    onChange?: (value: boolean) => void
    focusOptions?: UseFocusHandlerProps['focusOptions']
    boxProps?: BoxProps
}

const CheckBox: React.FC<CheckBoxProps> = ({
    onFocus,
    onChange,
    focusOptions,
    boxProps,
}) => {
    const {
        isFocused,
    } = useFocusHandler({ handler: onFocus, focusOptions })

    const [isChecked, setIsChecked] = useState(false)

    useInput((input, key) => {
        if (!isFocused) {
            return
        }

        const isEnterPressed = key.return
        const isSpacePressed = input === ' '

        if (isEnterPressed || isSpacePressed) {
            setIsChecked(!isChecked)
        }
    })

    useEffect(() => {
        if (!onChange) {
            return
        }

        onChange(isChecked)
    }, [isChecked])

    return <Box {...boxProps} >
        <CheckBoxIndicator isChecked={isChecked} isFocused={isFocused} />
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
