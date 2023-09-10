import { CustomRenderElementProps, CustomRenderFC } from "@types"

/**
 * Ink-inputs `useCustomRenderElement` options
 */
export type UseCustomRenderElementOptions<T extends object = object> = {
    fallback: CustomRenderFC<T>
}
    & CustomRenderElementProps<T>

/**
 * Ink-inputs `useCustomRenderElement` output
 */
export type UseCustomRenderElementOutput<T extends object = object> = {
    isHasChildren: boolean
    isHasRender: boolean
    Render: CustomRenderFC<T>
}
