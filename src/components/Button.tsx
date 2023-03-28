import React from 'react'
import { Box, useInput } from "ink"
import useFocusHandler, { UseFocusHandlerProps } from '../hooks/useFocusHandler.js'
import { InkChildren } from '../types.js'

/**
 * Props for button wrapper component
 */
interface ButtonWrapperProps {
    isFocused?: boolean
    children?: InkChildren
}

/**
 * Component for wrap `content` passed in button
 * @param props
 */
const ButtonWrapper: React.FC<ButtonWrapperProps> = ({
    children
}) => {
    return <Box>{children}</Box>
}

/**
 * Props for button content component
 */
interface ButtonContentProps {
    isFocused?: boolean
    children?: InkChildren
}

/**
 * Component for displaying button `content` passed as children
 * @param props
 */
const ButtonContent: React.FC<ButtonContentProps> = ({children}) => {
    return <>
        {children}
    </>
}

/**
 * Props for root `button` component
 */
interface ButtonProps {
    onClick?: () => void
    onFocus?: UseFocusHandlerProps['handler']
    focusOptions?: UseFocusHandlerProps['focusOptions']
    children?: InkChildren
    wrapperComponent?: React.FC<ButtonWrapperProps>
    contentComponent?: React.FC<ButtonContentProps>
}

/**
 * Component for root button element
 * @param props
 */
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
export {
    ButtonWrapper,
    ButtonContent,
    Button,
}
export type {
    ButtonWrapperProps,
    ButtonContentProps,
    ButtonProps,
}
