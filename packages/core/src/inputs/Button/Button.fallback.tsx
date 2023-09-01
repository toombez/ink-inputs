import React from "react"
import { Box, Text } from "ink"
import { ButtonRenderProps } from "./Button.types.js"
import { CustomRenderFC } from "@types"

const ButtonFallback: CustomRenderFC<ButtonRenderProps> = ({
    isDisabled,
    isFocused,
    label,
}) => (
    <Text
        backgroundColor={isDisabled ? "gray" : "black"}
        underline={isFocused}
    >
        {label}
    </Text>
)

export default ButtonFallback
