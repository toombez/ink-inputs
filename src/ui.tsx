import { Box } from 'ink'
import React from 'react'
import ButtonExample from './examples/Button.js'
import InputExample from './examples/Input.js'

const App = ({ name }: { name?: string }) => {
    return (
        <Box>
            {/* <ButtonExample /> */}
            <InputExample />
        </Box>
    )
}

export default App
