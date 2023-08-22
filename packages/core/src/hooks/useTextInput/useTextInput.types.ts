import type { PropsBuilder } from "@types"

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

export type TextInputCursorOperations = 'ADD' | 'REMOVE'

export type TextInputProps = TextInputTypes['InputProps']
export type TextInputRenderProps = TextInputTypes['RenderProps']
