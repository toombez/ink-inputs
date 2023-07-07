import React from 'react'
import { InkChildren, InputCommonProps, InputRenderCommonProps, handler, useFocusOptions } from '@types'
import { useButton } from '@hooks'
import { useRender } from '@hooks/useRender.js'
import { Box, Text, useFocus } from 'ink'

/**
 * Button render props
 */
type ButtonRenderProps = {
    label: string
} & InputRenderCommonProps

const ButtonRenderFallback: React.FC<ButtonRenderProps> = ({
    label,
    isFocused,
}) => {
    return (
        <Text underline={isFocused}>
            {label}
        </Text>
    )
}

/**
 * Button props
 */
type ButtonProps = {
    onClick?: handler
    onFocus?: handler
    onBlur?: handler

    label?: string
} & InputCommonProps<ButtonRenderProps>

const Button: React.FC<ButtonProps> = ({
    children,
    render,
    label = '',
    onBlur,
    onClick,
    onFocus,
    focusOptions,
}) => {
    const { isFocused } = useButton({
        blurHandler: onBlur,
        clickHandler: onClick,
        focusHandler: onFocus,
        focusOptions,
    })

    const { Render } = useRender({
        children,
        render,
    }, ButtonRenderFallback)

    return (
        <Render
            isFocused={isFocused}
            label={label}
        />
    )
}

export default Button
