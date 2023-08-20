import { PropsBuilder } from "./global.types.js"

export type CheckBoxOption<T> = {
    label: string
    value: T
}

type CheckBoxTypes<T> = PropsBuilder<{
    options: CheckBoxOption<T>[]
    onSelect?: (selected: T[]) => void
}, {
    options: CheckBoxOption<T>[]
    selected: T[]
    selectedIndexes: number[]
    cursorIndex: number

    select: (index: number) => void
    unselect: (element: T) => void
}>

export type CheckBoxProps<T> = CheckBoxTypes<T>['inputProps']
export type CheckBoxRenderProps<T> = CheckBoxTypes<T>['renderProps']
