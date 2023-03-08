import React, { PropsWithChildren } from 'react'
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

type RadioButtonWrapperProps = {
    isFocused?: boolean
    isChecked?: boolean
} & PropsWithChildren

const RadioButtonWrapper: React.FC<RadioButtonWrapperProps> = ({
    children,
}) => {
    return <Box>{children}</Box>
}

export {
    RadioButtonIndicator,
    RadioButtonLabel,
    RadioButtonWrapper,
}
export type {
    RadioButtonIndicatorProps,
    RadioButtonLabelProps,
    RadioButtonWrapperProps,
}
