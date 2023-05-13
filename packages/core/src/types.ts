import { useFocus } from 'ink'

/**
 * Type for ink components childrens
 */
export type InkChildren = JSX.Element | JSX.Element[]

/**
 * Handler type for inputs
 */
export type handler = () => void

/**
 * Use focus options
 */
export type useFocusOptions = Parameters<typeof useFocus>[0]
