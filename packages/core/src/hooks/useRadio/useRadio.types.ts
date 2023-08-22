import type { PropsBuilder } from "@types"

type RadioTypes<T> = PropsBuilder<{
    options: RadioOption<T>[]
    onChange?: (value: T) => void
}, {
    options: RadioOption<T>[]
    selected: T
    selectedIndex: number
    cursorIndex: number
    select: (delta: number) => void
}>

export type RadioOption<T> = {
    value: T
    label: string
}

export type RadioProps<T> = RadioTypes<T>['InputProps']
export type RadioRenderProps<T> = RadioTypes<T>['RenderProps']