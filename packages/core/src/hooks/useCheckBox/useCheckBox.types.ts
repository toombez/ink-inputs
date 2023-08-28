import type { PropsBuilder } from "@types"

export type CheckBoxOption<T> = {
    label: string
    value: T
}

type CheckBoxTypes<T> = PropsBuilder<{
    options: CheckBoxOption<T>[]
    value?: CheckBoxOption<T>[]
    onSelect?: (selected: CheckBoxOption<T>[]) => void
}, {
    options: CheckBoxOption<T>[]
    selected: CheckBoxOption<T>[]
    selectedIndexes: number[]
    cursorIndex: number

    select: (option: CheckBoxOption<T>) => void
    unselect: (element: CheckBoxOption<T>) => void
}>

export type CheckBoxProps<T> = CheckBoxTypes<T>['InputProps']
export type CheckBoxRenderProps<T> = CheckBoxTypes<T>['RenderProps']
