import { InkChildren, BaseInputProps, BaseRenderProps } from "@ink-inputs/core"

export type IComposerProps<
    Props extends BaseInputProps<RenderProps>,
    RenderProps extends BaseRenderProps,
> = {
    hook: (props: Props) => RenderProps
    fallback: (props: RenderProps) => InkChildren
}
