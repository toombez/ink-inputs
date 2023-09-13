/**
 * Ink-inputs `useCursor` hook options
 */
export type UseCursorOptions = {
    /**
     * Maximum position that the cursor does not reach
     */
    maxPosition: number

    /**
     * The minimum position at which a course can hold
     */
    minPosition?: number

    /**
     * Initial cursor position
     */
    initialPosition?: number

    /**
     *  Whether the cursor position range is looped
     */
    isCyclic?: boolean
}

/**
 * Ink-inputs `useCursor` hook output
 */
export type UseCursorOutput = {
    /**
     * Current cursor position
     */
    cursorPosition: number

    /**
     * Indicates whether the cursor is at the start
     */
    isCursorAtStart: boolean

    /**
     * Indicates whether the cursor is at the end
     */
    isCursorAtEnd: boolean

    /**
     * Position in front of the cursor
     */
    indexBeforeCursor: number

    /**
     * The position after the cursor.
     */
    indexAfterCursor: number

    /**
     * Move the cursor to new position
     * @param position new position
     * @returns
     */
    moveCursorTo: (position: number) => void

    /**
     * Move the cursor relative to the current position
     * @param delta the offset by which the cursor should be moved from the
     * current position
     * @returns
     */
    moveCursor: (delta: number) => void

    /**
     * Move the cursor to the start
     * @returns
     */
    moveCursorToStart: () => void

    /**
     * Move the cursor to the end
     * @returns
     */
    moveCursorToEnd: () => void
}
