import React from 'react'
import { render, Box, Text } from 'ink'
import ButtonExample from '@examples/Button.js'

const App: React.FC = () => {
    return (
        <Box flexDirection='column' borderStyle='single'>
            <Text>Lorem, ipsum.</Text>
            <ButtonExample />
        </Box>
    )
}

render(<App/>)
