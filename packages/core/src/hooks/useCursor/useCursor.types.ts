/**
 * Options for useCursor hook
 */
export type UseCursorOptions = {
    /**
     * Maximal cursor position
     */
    maxPosition: number

    /**
     * Minimal cursor position
     */
    minPosition?: number

    /**
     * Initial cursor position
     */
    initialPosition?: number

    /**
     * Is looped cursor position range
     */
    isCyclic?: boolean
}

/**
 * Output for useCursor hook
 */
export type UseCursorOutput = {
    /**
     * Cursor position
     */
    cursorPosition: number

    /**
     * Is cursor position at minilal allowed position
     */
    isCursorAtStart: boolean

    /**
     * Is cursor position at maximal allowed position
     */
    isCursorAtEnd: boolean

    /**
     * Position before cursor
     *
     * TODO: rename to `beforeCursorPosition`
     */
    indexBeforeCursor: number

    /**
     * Position after cursor
     *
     * TODO: rename to `afterCursorPosition`
     */
    indexAfterCursor: number

    /**
     * Move cursor to position
     * @param position new cursor position
     * @returns
     */
    moveCursorTo: (position: number) => void

    /**
     * Move cursor by delta
     * @param delta delta to move cursor
     * @returns
     */
    moveCursor: (delta: number) => void

    /**
     * Move cursor to minimal allowed position
     * @returns
     */
    moveCursorToStart: () => void

    /**
     * Move cursor to maximal allowed position
     * @returns
     */
    moveCursorToEnd: () => void
}
