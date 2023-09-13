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
    /**
     * Initial cursor width
     */
    initialWidth?: number
} & UseCursorOptions

/**
 * Ink-inputs `useWideCursor` output
 */
export type UseWideCursorOutput = {
    /**
     * Actual cursor width
     */
    cursorWidth: number

    /**
     * Indicates whether the cursor width is the minimum width
     */
    isCursorMinimalWidth: boolean

    /**
     * Change the width of the cursor
     * @param width new width
     * @returns
     */
    resizeCursorTo: (width: number) => void

    /**
     * Change the width of the cursor from the current width
     * @param delta width offset by which you want to resize the cursor
     * @returns
     */
    resizeCursor: (delta: number) => void

    /**
     * Set the cursor to the maximal width
     * @returns
     */
    resizeCursorToMinimal: () => void

    /**
     * Set the cursor to the minimum width
     * @returns
     */
    resizeCursorToMaximal: () => void
} & UseCursorOutput
