import { InkChildren, InputCommonProps, InputRenderCommonProps } from "@ink-inputs/core"

export type IComposerProps<
    Props extends InputCommonProps<RenderProps>,
    RenderProps extends InputRenderCommonProps,
> = {
    hook: (props: Props) => RenderProps
    fallback: (props: RenderProps) => InkChildren
}
