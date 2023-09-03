import React from "react"
import { Text } from "ink"
import { ButtonRenderProps } from "./Button.types.js"
import { CustomRenderFC } from "@types"

const ButtonFallback: CustomRenderFC<ButtonRenderProps> = ({
    isDisabled,
    isFocused,
    label,
}) => (
    <Text
        inverse={isFocused}
        underline={isFocused}
        strikethrough={isDisabled}
        backgroundColor={isDisabled ? 'gray' : 'black'}
    >
        {label}
    </Text>
)

export default ButtonFallback
