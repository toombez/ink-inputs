import {
    CustomRenderElementProps,
    FocusableElementProps,
    FocusableElementRenderProps
} from "@types"

export type ButtonRenderProps = {
    label: string | null
    click: () => void
}
    & FocusableElementRenderProps

export type ButtonProps = {
    label?: string
    onClick?: () => void
}
    & FocusableElementProps
    & CustomRenderElementProps<ButtonRenderProps>
