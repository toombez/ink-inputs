import { BaseInputProps, BaseRenderProps } from "./global.types.js"

export type CheckBoxOption<T> = {
    label: string
    value: T
}

export type CheckBoxRenderProps<T> = {
    options: CheckBoxOption<T>[]
    selected: T[]
    selectedIndexes: number[]
    cursorIndex: number

    select: (index: number) => void
    unselect: (element: T) => void
} & BaseRenderProps

export type CheckBoxProps<T> = {
    options: CheckBoxOption<T>[]
    onSelect?: (selected: T[]) => void
} & BaseInputProps<CheckBoxRenderProps<T>>
