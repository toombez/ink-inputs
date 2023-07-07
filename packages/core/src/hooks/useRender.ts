import React from 'react'
import { InputCommonProps, InputRender, InputRenderCommonProps } from '@types'
import RenderInkChildren from '@components/RenderInkChildren.js'

export const useRender = <T extends InputRenderCommonProps>(
    props: InputCommonProps<T>,
    fallback: InputRender<T>,
) => {
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
            return RenderInkChildren.bind(this, { children })
        }

        return fallback
    }, [children, render])

    return {
        Render,
    }
}
