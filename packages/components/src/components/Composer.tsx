import { InkChildren, InputCommonProps, InputRenderCommonProps, useRender } from '@ink-inputs/core'
import { IComposerProps } from '@types'
import React from 'react'

export default function Composer<
    T extends InputCommonProps<K>,
    K extends InputRenderCommonProps
>({
    fallback,
    hook,
}: IComposerProps<T, K>): (props: T) => InkChildren {
    const Component = (props: T) => {
        const renderProps = hook(props)

        const { Render } = useRender(props, fallback)

        return <Render {...renderProps} />
    }

    return Component
}


