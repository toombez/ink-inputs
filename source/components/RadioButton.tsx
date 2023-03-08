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

type RadioButtonProps = {
    LabelComponent?: React.FC<RadioButtonLabelProps>
    IndicatorComponent?: React.FC<RadioButtonIndicatorProps>
    WrapperComponent?: React.FC<RadioButtonWrapperProps>
    isChecked?: boolean
    isFocused?: boolean
    label?: string
}

const RadioButton: React.FC<RadioButtonProps> = ({
    IndicatorComponent = RadioButtonIndicator,
    LabelComponent = RadioButtonLabel,
    WrapperComponent = RadioButtonWrapper,
    isChecked,
    isFocused,
    label,
}) => {
    return <WrapperComponent isChecked={isChecked} isFocused={isFocused}>
        <IndicatorComponent isChecked={isChecked} isFocused={isFocused} />
        {label && <Box marginLeft={1}>
            <LabelComponent
                label={label}
                isChecked={isChecked}
                isFocused={isFocused}
            />
        </Box>}
    </WrapperComponent>
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
