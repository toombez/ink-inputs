import { Box, Text } from 'ink'
import React from 'react'
import ButtonExample from './examples/Button.js'

const App = ({ name }: { name?: string }) => {
    return (
        <Box flexDirection='column' borderStyle='single'>
            <Text>Lorem, ipsum.</Text>
            <ButtonExample />
        </Box>
    )
}

export default App
