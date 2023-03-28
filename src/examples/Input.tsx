import { Box, Text } from "ink"
import React, { useState } from "react"
import { Input } from '../components/Input.js'

const Example: React.FC = () => {
    const [query, setQuery] = useState('')

    return (
        <Box flexDirection="column">
            <Text>
                {query}
            </Text>
            <Input onChange={(value) => {setQuery(value)}} />
        </Box>
    )
}

export default Example
