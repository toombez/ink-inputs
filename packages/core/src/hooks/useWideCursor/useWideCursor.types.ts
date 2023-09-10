import type {
    UseCursorOptions,
    UseCursorOutput
} from "@hooks/useCursor/index.js"

/**
 * Options for useWideCursor
 */
/**
 * Ink-inputs `useWideCursor` options
 */
export type UseWideCursorOptions = {
    initialWidth?: number
} & UseCursorOptions

/**
 * Ink-inputs `useWideCursor` output
 */
export type UseWideCursorOutput = {
    cursorWidth: number
    isCursorMinimalWidth: boolean

    resizeCursorTo: (width: number) => void
    resizeCursor: (delta: number) => void
    resizeCursorToMinimal: () => void
    resizeCursorToMaximal: () => void
} & UseCursorOutput
