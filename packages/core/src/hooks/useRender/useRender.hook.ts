import React from 'react'
import type { BaseInputProps, InputRender, BaseRenderProps } from '@types'
import type { IRenderChildrenProps } from './useRender.types.js'

const RenderChildren = ({ children }: IRenderChildrenProps) => children

export const useRender = <T extends BaseRenderProps>(
    props: BaseInputProps<T>,
    fallback: InputRender<T>,
): {
    Render: InputRender<T>
} => {
    const { children, render } = props

    const Render = React.useMemo<InputRender<T>>(() => {
        const hasChildren = children !== undefined
        const isChildrenRender = typeof children === 'function'
        const hasRender = render !== undefined

        if (hasChildren && isChildrenRender) {
            return children
        }

        if (hasRender) {
            return render
        }

        if (hasChildren && !isChildrenRender) {
            return RenderChildren.bind(this, { children })
        }

        return fallback
    }, [children, render])

    return {
        Render,
    }
}
