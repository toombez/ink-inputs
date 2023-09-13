import { CustomRenderElementProps, CustomRenderFC } from "@types"

/**
 * Ink-inputs `useCustomRenderElement` options
 *
 * @template RenderProps type of props for custom render functional component
 */
export type UseCustomRenderElementOptions<
    RenderProps extends object = object,
> = {
    /**
     * Fallback render function if children or render props are not passed
     */
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
    /**
     * Indicates whether the `children` prop passed
     */
    isHasChildren: boolean

    /**
     * Indicates whether the `render` prop passed
     */
    isHasRender: boolean

    /**
     * Memoized render function
     */
    Render: CustomRenderFC<RenderProps>
}
