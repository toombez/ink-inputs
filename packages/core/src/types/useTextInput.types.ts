import { BaseInputProps, BaseRenderProps } from "./global.types.js"

export type TextInputRenderProps = {
    value: string
    cursorPosition: number
    input: (input: string) => void
} & BaseRenderProps

export type TextInputProps = {
    /**
     * On input handler
     * @param input new value
     */
    onInput?: (input: string) => void
} & BaseInputProps<TextInputRenderProps>
