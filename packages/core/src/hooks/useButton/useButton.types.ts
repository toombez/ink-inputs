import type { PropsBuilder } from "@types"

type ButtonTypes = PropsBuilder<{
    /**
     * Click handler
     */
    onClick?: () => void

    /**
     * Button label
     */
    label?: string
}, {
    /**
     * Button label
     */
    label: string
    /**
     * Click emitter
     */
    click: () => void
}>

export type ButtonProps = ButtonTypes['InputProps']
export type ButtonRenderProps = ButtonTypes['RenderProps']
