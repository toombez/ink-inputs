import { InkChildren, useRender } from '@ink-inputs/core'
import type { BaseInputProps, BaseRenderProps } from '@ink-inputs/core/types'
import { IComposerProps } from '@types'
import React from 'react'

export default function Composer<
    T extends BaseInputProps<K>,
    K extends BaseRenderProps
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


