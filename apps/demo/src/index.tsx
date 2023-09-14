import React from 'react'
import { render, Box, Text } from 'ink'
import ButtonDemo from '@demos/ButtonDemo.js'

const App: React.FC = () => {
    return (
        <Box flexDirection='column' borderStyle='single'>
            <ButtonDemo />
        </Box>
    )
}

render(<App/>)
