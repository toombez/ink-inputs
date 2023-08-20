import { Handler, BaseInputProps, BaseRenderProps } from "./global.types.js"

/**
 * Button render props
 */
export type ButtonRenderProps = {
    /**
     * Button label
     */
    label: string
    /**
     * Click emitter
     */
    click: () => void
} & BaseRenderProps

/**
 * Button props
 */
export type ButtonProps = {
    /**
     * Click handler
     */
    onClick?: Handler

    /**
     * Button label
     */
    label?: string
} & BaseInputProps<ButtonRenderProps>
