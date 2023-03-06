import React from 'react'
import { Box, useInput } from "ink"
import useFocusHandler, { UseFocusHandlerProps } from '../hooks/useFocusHandler.js'

interface ButtonWrapperProps {
    isFocused?: boolean
    children?: JSX.Element | JSX.Element[]
}

const ButtonWrapper: React.FC<ButtonWrapperProps> = ({
    children
}) => {
    return <Box>{children}</Box>
}

interface ButtonProps {
    onClick?: () => void
    onFocus?: UseFocusHandlerProps['handler']
    focusOptions?: UseFocusHandlerProps['focusOptions']
    children?: string | JSX.Element | JSX.Element[]
    wrapperComponent?: React.FC<ButtonWrapperProps>
}

const Button: React.FC<ButtonProps> = ({
    onClick,
    onFocus,
    focusOptions,
    children,
    wrapperComponent = ButtonWrapper
}) => {
    const { isFocused } = useFocusHandler({ handler: onFocus, focusOptions})

    useInput((_, key) => {
        if (!isFocused || !key.return || !onClick) {
            return
        }

        onClick()
    })

    return React.createElement(wrapperComponent, { isFocused }, children)
}

export default Button
export { Button }
