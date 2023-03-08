import { Box } from 'ink'
import React, { PropsWithChildren } from 'react'

type InputWrapperProps = {
    isFocused?: boolean
} & PropsWithChildren

const InputWrapper: React.FC<InputWrapperProps> = ({
    children,
}) => {
    return <Box>{children}</Box>
}

export {
    InputWrapper,
}
export type {
    InputWrapperProps,
}
