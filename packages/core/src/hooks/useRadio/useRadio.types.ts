import type { PropsBuilder } from "@types"

type RadioTypes<T> = PropsBuilder<{
    options: RadioOption<T>[]
    onChange?: (option: RadioOption<T> | null) => void
    value?: RadioOption<T> | null
}, {
    options: RadioOption<T>[]
    selected: RadioOption<T> | null
    selectedIndex: number | null
    cursorIndex: number
    select: (option: RadioOption<T> | null) => void
}>

export type RadioOption<T> = {
    value: T
    label: string
}

export type RadioProps<T> = RadioTypes<T>['InputProps']
export type RadioRenderProps<T> = RadioTypes<T>['RenderProps']
