import { Text } from 'ink'
import React from 'react'
import { handler, useFocusOptions } from '../types.js'
import { useButton } from '../hooks/useButton.js'

interface ButtonProps {
    onClick?: handler
    onFocus?: handler
    onBlur?: handler

    focusOptions?: useFocusOptions
}

const Button: React.FC<ButtonProps> = ({
    onBlur,
    onClick,
    onFocus,

    focusOptions,
}) => {
    const { isFocused } = useButton({
        clickHandler: onClick,
        focusHandler: onFocus,
        blurHandler: onBlur,

        focusOptions,
    })

    return (
        <Text underline={isFocused}>
            Lorem, ipsum.
        </Text>
    )
}

export default Button
