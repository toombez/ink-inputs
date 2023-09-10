import {
    CustomRenderElementProps,
    FocusableElementProps,
    FocusableElementRenderProps
} from "@types"

/**
 * Type of props for custom render functional component of `Button` UI element
 */
export type ButtonRenderProps = {
    label: string | null
    click: () => void
}
    & FocusableElementRenderProps

/**
 * Type of props for `Button` UI element
 */
export type ButtonProps = {
    label?: string
    onClick?: () => void
}
    & FocusableElementProps
    & CustomRenderElementProps<ButtonRenderProps>
