/**
 * Ink-inputs `useCursor` hook options
 */
export type UseCursorOptions = {
    maxPosition: number
    minPosition?: number
    initialPosition?: number
    isCyclic?: boolean
}

/**
 * Ink-inputs `useCursor` hook output
 */
export type UseCursorOutput = {
    cursorPosition: number
    isCursorAtStart: boolean
    isCursorAtEnd: boolean
    indexBeforeCursor: number
    indexAfterCursor: number
    moveCursorTo: (position: number) => void
    moveCursor: (delta: number) => void
    moveCursorToStart: () => void
    moveCursorToEnd: () => void
}
