import { Box, Text } from "ink"
import React, { PropsWithChildren } from "react"

type DemoWrapperProps = PropsWithChildren<{
    label: string
}>

const DemoWrapper: React.FC<DemoWrapperProps> = ({
    label,
    children,
}) => {
    return (
        <Box
            flexDirection="column"
            borderStyle="single"
            borderColor="magenta"
        >
            <Text>
                {label}:
            </Text>

            {children}
        </Box>
    )
}

export default DemoWrapper
