import React from 'react'
import { InkChildren, handler, useFocusOptions } from '../types.js'
import { useButton } from '../hooks/useButton.js'

/**
 * Button render props
 */
interface ButtonRenderProps {
    isFocused?: boolean
    children?: InkChildren
}

/**
 * Button render props omited children
 */
type ButtonRenderPropsWithoutChildrent = Omit<ButtonRenderProps, 'children'>

/**
 * Button render function
 */

type ButtonRender = React.FC<ButtonRenderProps>
/**
 * Button render function without children
 */
type ButtonRenderWithoutChildren = React.FC<ButtonRenderPropsWithoutChildrent>

/**
 * Button props
 */
interface ButtonProps {
    onClick?: handler
    onFocus?: handler
    onBlur?: handler

    children?: ButtonRenderWithoutChildren | InkChildren
    render?: ButtonRender
    focusOptions?: useFocusOptions
}

const Button: React.FC<ButtonProps> = ({
    onBlur,
    onClick,
    onFocus,

    children,
    render = ({ children }) => <>{children}</>,
    focusOptions,
}) => {
    const { isFocused } = useButton({
        clickHandler: onClick,
        focusHandler: onFocus,
        blurHandler: onBlur,

        focusOptions,
    })

    const _children = typeof children === 'function'
        ? React.createElement(children, { isFocused })
        : children

    const _render = React.createElement(render, {
        isFocused,
        children: _children
    })

    return _render
}

export default Button
