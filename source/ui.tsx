import React, {useState, type FC} from 'react'
import {Box, Text} from 'ink'
import Button, {  } from './components/Button.js'

const App: FC<{name?: string}> = ({name = 'Stranger'}) => {
    const [c, setC] = useState(0)

    return <Box>
        <Button
            wrapperComponent={({ isFocused, children }) => {
                return <Box><Text>{`${isFocused}`}|</Text>{children}</Box>
            }}
            contentComponent={() => {
                return <Box borderStyle='single'>
                    <Text>c++</Text>
                </Box>
            }}
            onClick={() => setC(v => ++v)}
        />
        <Button
            wrapperComponent={({ isFocused, children }) => {
                return <Box><Text>{`${isFocused}`}|</Text>{children}</Box>
            }}
            contentComponent={() => {
                return <Box borderStyle='single'>
                    <Text>c--</Text>
                </Box>
            }}
            onClick={() => setC(v => --v)}
        />
        <Text>
            { c }
        </Text>
    </Box>
}
export default App
