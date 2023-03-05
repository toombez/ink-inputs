import React, { useState, useEffect } from 'react'
import { Box, Text, useInput, TextProps, BoxProps } from "ink"

import useFocusHandler, { UseFocusHandlerProps } from '../hooks/useFocusHandler.js'

interface CheckBoxIndicatorProps {
    isFocused?: boolean
    isChecked?: boolean
    textProps?: TextProps
}

const CheckBoxIndicator: React.FC<CheckBoxIndicatorProps> = ({
    isChecked,
    textProps,
}) => {
    const checkBoxSymbol = isChecked ? '□' : '■'

    return <Text {...textProps} >{ checkBoxSymbol }</Text>
}

interface CheckBoxLabelProps {
    label?: string
    isFocused?: boolean
    textProps?: TextProps
}

const CheckBoxLabel: React.FC<CheckBoxLabelProps> = ({
    label,
    textProps,
}) => {
    return <Text {...textProps} >{label}</Text>
}

interface CheckBoxProps {
    onFocus?: UseFocusHandlerProps['handler']
    onChange?: (value: boolean) => void
    label?: string
    focusOptions?: UseFocusHandlerProps['focusOptions']
    boxProps?: BoxProps
}

const CheckBox: React.FC<CheckBoxProps> = ({
    onFocus,
    onChange,
    label,
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
        { label &&
            <Box paddingLeft={1}>
                <CheckBoxLabel label={label} isFocused={isFocused} />
            </Box>
        }
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
