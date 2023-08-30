import type {
    UseCursorOptions,
    UseCursorOutput
} from "@hooks/useCursor/index.js"

/**
 * Options for useWideCursor
 */
export type UseWideCursorOptions = {
    /**
     * Initial width
     */
    initialWidth?: number
} & UseCursorOptions

/**
 * Output for useWideCursor
 */
export type UseWideCursorOutput = {
    cursorWidth: number
    isCursorMinimalWidth: boolean

    resizeCursorTo: (width: number) => void
    resizeCursor: (delta: number) => void
    resizeCursorToMinimal: () => void
    resizeCursorToMaximal: () => void
} & UseCursorOutput
