import { CustomRenderElementProps, CustomRenderFC } from "@types"

/**
 * Ink-inputs `useCustomRenderElement` options
 *
 * @template RenderProps type of props for custom render functional component
 */
export type UseCustomRenderElementOptions<
    RenderProps extends object = object,
> = {
    fallback: CustomRenderFC<RenderProps>
}
    & CustomRenderElementProps<RenderProps>

/**
 * Ink-inputs `useCustomRenderElement` output
 *
 * @template RenderProps type of props for custom render functional component
 */
export type UseCustomRenderElementOutput<
    RenderProps extends object = object,
> = {
    isHasChildren: boolean
    isHasRender: boolean
    Render: CustomRenderFC<RenderProps>
}
