import React from 'react'
import { Text } from "ink"

type RadioButtonIndicatorProps = {
    isChecked?: boolean
    isFocused?: boolean
}

const RadioButtonIndicator: React.FC<RadioButtonIndicatorProps> = ({
    isChecked,
}) => {
    return <Text>{isChecked}</Text>
}

export {
    RadioButtonIndicator
}
export type {
    RadioButtonIndicatorProps
}
