import { useState, useEffect } from "react"
import { UseCursorOptions, UseCursorOutput } from "./useCursor.types.js"
import { clamp, moduloCycleSequence } from "@/utils.js"

export const CURSOR_DEFAULT_MINIMAL_POSITION = 0 as const

/**
 * Use cursor hook
 * @param options hook options
 * @returns data about cursor position and functions for maniputaling it
 */
export function useCursor({
    maxPosition,
    minPosition = CURSOR_DEFAULT_MINIMAL_POSITION,
    initialPosition = minPosition,
    isCyclic = false,
}: UseCursorOptions): UseCursorOutput {
    // useEffect(() => {
    //     if (initialPosition < minPosition || initialPosition > maxPosition) {
    //         throw "Initial position cannot be outside minimal and maximum bounds."
    //     }
    // }, [])

    const [cursorPosition, setCursorPosition] = useState(initialPosition)

    const isCursorAtStart = cursorPosition === minPosition
    const isCursorAtEnd = cursorPosition === maxPosition
    const indexBeforeCursor = cursorPosition - 1
    const indexAfterCursor = cursorPosition + 1

    function moveCursorTo(position: number) {
        const movedPosition = isCyclic
            ? moduloCycleSequence(position, minPosition, maxPosition)
            : clamp(position, minPosition, maxPosition)

        setCursorPosition(movedPosition)
    }

    function moveCursor(delta: number) {
        moveCursorTo(cursorPosition + delta)
    }

    function moveCursorToStart() {
        moveCursorTo(minPosition)
    }

    function moveCursorToEnd() {
        moveCursorTo(maxPosition)
    }

    useEffect(() => {
        if (cursorPosition > maxPosition) {
            return moveCursorToEnd()
        }

        if (cursorPosition < minPosition) {
            return moveCursorToStart()
        }
    }, [maxPosition, minPosition])

    return {
        cursorPosition,
        isCursorAtStart,
        isCursorAtEnd,
        indexBeforeCursor,
        indexAfterCursor,

        moveCursorTo,
        moveCursor,
        moveCursorToStart,
        moveCursorToEnd,
    }
}
