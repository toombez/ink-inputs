import type { PropsBuilder } from "@types"

type TextInputTypes = PropsBuilder<{
    /**
     * On input handler
     * @param input new value
     */
    onInput?: (input: string) => void

    value?: string
}, {
    value: string
    cursorPosition: number
    charsBeforeCursor: string
    charsUnderCursor: string
    charsAfterCursor: string
    isCursorAtEnd: boolean
    input: (input: string) => void
}>

export type TEXT_INPUT_KEY_OPERATION = "ADD_CHAR" | "BACKSPACE" | "DELETE"

export type TextInputProps = TextInputTypes['InputProps']
export type TextInputRenderProps = TextInputTypes['RenderProps']
