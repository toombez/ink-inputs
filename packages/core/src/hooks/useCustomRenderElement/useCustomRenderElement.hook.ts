import { useMemo } from 'react'
import { UseCustomRenderElementOptions, UseCustomRenderElementOutput } from "./useCustomRenderElement.types.js";
import { CustomRenderFC } from '@types';

export const useCustomRenderElement = <T extends object = object>({
    children,
    render,
    fallback,
}: UseCustomRenderElementOptions<T>): UseCustomRenderElementOutput<T> => {
    const isHasChildren = children !== undefined
    const isHasRender = render !== undefined

    const Render = useMemo<CustomRenderFC<T>>(() => {
        return children ?? render ?? fallback
    }, [children, render])

    return {
        Render,
        isHasChildren,
        isHasRender,
    }
}
