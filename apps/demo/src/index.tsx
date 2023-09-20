import React, { useState } from 'react'
import { render, Box, useFocusManager } from 'ink'
import ButtonDemo from '@demos/ButtonDemo.js'
import TextInputDemo from '@demos/TextInputDemo.js'
import SingleSelectDemo from '@demos/SingleSelectDemo.js'
import RadioDemo from '@demos/RadioDemo.js'
import CheckBoxDemo from '@demos/CheckBoxDemo.js'
import { Option, SingleSelect } from '@ink-inputs/core'

type DEMO = 'BUTTON'
    | 'TEXT_INPUT'
    | 'RADIO'
    | 'CHECK_BOX'
    | 'SINGLE_SELECT'

const App: React.FC = () => {
    const [demo, setDemo] = useState<Option<DEMO> | null>(null)

    const { focusNext } = useFocusManager()

    const [options] = useState<Array<Option<DEMO>>>([
        { label: 'Buttons demo', value: 'BUTTON' },
        { label: 'TextInput demo', value: 'TEXT_INPUT' },
        { label: 'Radio demo', value: 'RADIO' },
        { label: 'CheckBox demo', value: 'CHECK_BOX' },
        { label: 'SingleSelect demo', value: 'SINGLE_SELECT' },
    ])

    return (
        <Box flexDirection='column' borderStyle='single'>
            <Box borderColor="red" borderStyle="round">
                <SingleSelect
                    placeholder='Select demo'
                    options={options}
                    value={demo}
                    onChange={(demo) => {
                        setDemo(demo)
                    }}
                />
            </Box>

            {demo?.value === 'BUTTON' && <ButtonDemo />}
            {demo?.value === 'TEXT_INPUT' && <TextInputDemo />}
            {demo?.value === 'RADIO' && <RadioDemo />}
            {demo?.value === 'CHECK_BOX' && <CheckBoxDemo />}
            {demo?.value === 'SINGLE_SELECT' && <SingleSelectDemo />}
        </Box>
    )
}

render(<App/>)
