import { CustomRenderElementProps, CustomRenderFC } from "@types"

export type UseCustomRenderElementOptions<T extends object = object> = {
    fallback: CustomRenderFC<T>
}
    & CustomRenderElementProps<T>

export type UseCustomRenderElementOutput<T extends object = object> = {
    isHasChildren: boolean
    isHasRender: boolean
    Render: CustomRenderFC<T>
}
