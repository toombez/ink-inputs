import { Handler, PropsBuilder } from "./global.types.js"

type ButtonTypes = PropsBuilder<{
    /**
     * Click handler
     */
    onClick?: Handler

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

export type ButtonProps = ButtonTypes['inputProps']
export type ButtonRenderProps = ButtonTypes['renderProps']
