import React from 'react'
import { Box, BoxProps, Text, useFocus, useInput } from "ink"
import useFocusHandler, { UseFocusHandlerProps } from '../hooks/useFocusHandler.js'

interface ButtonProps {
    onClick?: () => void
    onFocus?: UseFocusHandlerProps['handler']
    focusOptions?: UseFocusHandlerProps['focusOptions']
    children?: string | JSX.Element | JSX.Element[]
    boxProps?: BoxProps
}

const Button: React.FC<ButtonProps> = ({
    onClick,
    onFocus,
    focusOptions,
    children,
    boxProps,
}) => {
    const { isFocused } = useFocusHandler({ handler: onFocus, focusOptions})

    useInput((_, key) => {
        if (!isFocused || !key.return || !onClick) {
            return
        }

        onClick()
    })

    return <Box {...boxProps} >
        {children}
    </Box>
}

export default Button
export { Button }
