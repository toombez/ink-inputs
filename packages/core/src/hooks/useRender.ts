import React from 'react'
import { InputCommonProps, InputRender, InputRenderCommonProps } from '@types'

export const useRender = <T extends InputRenderCommonProps>(
    props: InputCommonProps<T>,
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
            return () => React.Fragment({ children })
        }

        return fallback
    }, [children, render])

    return {
        Render,
    }
}
