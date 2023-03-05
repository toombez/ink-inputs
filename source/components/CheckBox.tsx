import React, { useState, useEffect } from 'react'
import { Box, Text, useInput, BoxProps } from "ink"

import useFocusHandler, { UseFocusHandlerProps } from '../hooks/useFocusHandler.js'

interface CheckBoxIndicatorProps {
    isFocused?: boolean
    isChecked?: boolean
}

const CheckBoxIndicator: React.FC<CheckBoxIndicatorProps> = ({
    isChecked,
}) => {
    const checkBoxSymbol = isChecked ? '□' : '■'

    return <Text>{ checkBoxSymbol }</Text>
}

interface CheckBoxLabelProps {
    label?: string
    isFocused?: boolean
    isChecked?: boolean
}

const CheckBoxLabel: React.FC<CheckBoxLabelProps> = ({
    label,
}) => {
    return <Text>{label}</Text>
}

interface CheckBoxProps {
    onFocus?: UseFocusHandlerProps['handler']
    onChange?: (value: boolean) => void
    label?: string
    focusOptions?: UseFocusHandlerProps['focusOptions']
    boxProps?: BoxProps
    indicatorComponent?: React.FC<CheckBoxIndicatorProps>
    labelComponent?: React.FC<CheckBoxLabelProps>
}

const CheckBox: React.FC<CheckBoxProps> = ({
    onFocus,
    onChange,
    label,
    focusOptions,
    boxProps,
    indicatorComponent = CheckBoxIndicator,
    labelComponent = CheckBoxLabel
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
        { React.createElement(indicatorComponent, { isChecked, isFocused }) }

        { label && <Box paddingLeft={1}>
            { React.createElement(labelComponent, { isFocused, label, isChecked }) }
        </Box> }
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
