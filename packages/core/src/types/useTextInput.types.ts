import { PropsBuilder } from "./global.types.js"

type TextInputTypes = PropsBuilder<{
    /**
     * On input handler
     * @param input new value
     */
    onInput?: (input: string) => void
}, {
    value: string
    cursorPosition: number
    input: (input: string) => void
}>

export type TextInputRenderProps = TextInputTypes['renderProps']

export type TextInputProps = TextInputTypes['inputProps']
