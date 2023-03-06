import React from 'react'
import { Box, useInput } from "ink"
import useFocusHandler, { UseFocusHandlerProps } from '../hooks/useFocusHandler.js'
import { InkChildren } from '../types.js'

interface ButtonWrapperProps {
    isFocused?: boolean
    children?: InkChildren
}

const ButtonWrapper: React.FC<ButtonWrapperProps> = ({
    children
}) => {
    return <Box>{children}</Box>
}

interface ButtonContentProps {
    isFocused?: boolean
    children?: InkChildren
}

const ButtonContent: React.FC<ButtonContentProps> = ({children}) => {
    return <>
        {children}
    </>
}

interface ButtonProps {
    onClick?: () => void
    onFocus?: UseFocusHandlerProps['handler']
    focusOptions?: UseFocusHandlerProps['focusOptions']
    children?: InkChildren
    wrapperComponent?: React.FC<ButtonWrapperProps>
    contentComponent?: React.FC<ButtonContentProps>
}

const Button: React.FC<ButtonProps> = ({
    wrapperComponent = ButtonWrapper,
    contentComponent = ButtonContent,
    children,
    focusOptions,
    onClick,
    onFocus,
}) => {
    const { isFocused } = useFocusHandler({ handler: onFocus, focusOptions})

    useInput((_, key) => {
        if (!isFocused || !key.return || !onClick) {
            return
        }

        onClick()
    })

    return React.createElement(
        wrapperComponent,
        { isFocused },
        React.createElement(contentComponent, { children, isFocused })
    )
}

export default Button
export { Button }
