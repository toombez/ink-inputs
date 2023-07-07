import React from 'react'
import { InkChildren } from '@types'

interface Props {
    children: InkChildren
}

const RenderInkChildren: React.FC<Props> = ({ children }) => <>{children}</>

export default RenderInkChildren
