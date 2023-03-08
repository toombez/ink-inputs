import React from 'react'
import { Box, Text } from "ink"
import figures from 'figures'

type RadioButtonIndicatorProps = {
    isChecked?: boolean
    isFocused?: boolean
}

const RadioButtonIndicator: React.FC<RadioButtonIndicatorProps> = ({
    isChecked,
}) => {
    return <Text>{isChecked ? figures.radioOn : figures.radioOff}</Text>
}

type RadioButtonLabelProps = {
    isChecked?: boolean
    isFocused?: boolean
    label: string
}

const RadioButtonLabel: React.FC<RadioButtonLabelProps> = ({
    label,
}) => {
    return <Text>{label}</Text>
}

export {
    RadioButtonIndicator,
    RadioButtonLabel,
}
export type {
    RadioButtonIndicatorProps,
    RadioButtonLabelProps,
}
