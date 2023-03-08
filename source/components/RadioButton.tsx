import React, { PropsWithChildren, useState } from 'react'
import { Box, Text, useInput } from "ink"
import figures from 'figures'
import useFocusHandler, { UseFocusHandlerProps } from '../hooks/useFocusHandler.js'

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
    label?: string
    focusOptions?: UseFocusHandlerProps['focusOptions']
    onFocus?: UseFocusHandlerProps['handler']
    onChange?: (value: boolean) => void
}

const RadioButton: React.FC<RadioButtonProps> = ({
    IndicatorComponent = RadioButtonIndicator,
    LabelComponent = RadioButtonLabel,
    WrapperComponent = RadioButtonWrapper,
    label,
    focusOptions,
    onChange = () => {},
    onFocus,
}) => {
    const [isChecked, setIsChecked] = useState(false)
    const { isFocused } = useFocusHandler({ handler: onFocus, focusOptions})

    useInput((input, key) => {
        if (!key.return && input !== ' ') {
            return
        }

        setIsChecked((v) => !v)
        onChange(isChecked)
    })

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

export default RadioButton
export {
    RadioButtonIndicator,
    RadioButtonLabel,
    RadioButtonWrapper,

    RadioButton,
}
export type {
    RadioButtonIndicatorProps,
    RadioButtonLabelProps,
    RadioButtonWrapperProps,

    RadioButtonProps,
}
