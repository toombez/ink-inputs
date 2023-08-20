import { BaseInputProps, BaseRenderProps } from "./global.types.js"

export type RadioOption<T> = {
    value: T
    label: string
}

export type RadioRenderProps<T> = {
    options: RadioOption<T>[]
    selected: T
    selectedIndex: number
    cursorIndex: number
    select: (delta: number) => void
} & BaseRenderProps

export type RadioProps<T> = {
    options: RadioOption<T>[]
    onChange?: (value: T) => void
} & BaseInputProps<RadioRenderProps<T>>
