import {
    CURSOR_DEFAULT_MINIMAL_POSITION,
    useCursor
} from "@hooks/useCursor/index.js"
import { useState, useEffect } from "react"
import { UseWideCursorOptions, UseWideCursorOutput } from "./useWideCursor.types.js"
import { clamp } from "@/utils.js"

export const CURSOR_MINIMAL_WIDTH = 1 as const

export function useWideCursor({
    initialWidth = CURSOR_MINIMAL_WIDTH,
    maxPosition,
    minPosition = CURSOR_DEFAULT_MINIMAL_POSITION,
    ...restUseWideCursorOptions
}: UseWideCursorOptions): UseWideCursorOutput {
    const {
        cursorPosition,

        moveCursorToEnd,
        moveCursorToStart,

        ...restUseCursorOutput
    } = useCursor({
        ...restUseWideCursorOptions,
        maxPosition,
        minPosition,
    })

    // useEffect(() => {
    //     if (cursorPosition + initialWidth > maxPosition) {
    //         throw "Cursor out bounds."
    //     }
    // }, [])

    const [cursorWidth, setCursorWidth] = useState<number>(initialWidth)

    const allowedMaxWidth = Math.max(
        maxPosition - cursorPosition,
        CURSOR_MINIMAL_WIDTH
    )
    const indexAfterCursor = cursorPosition + cursorWidth
    const isCursorMinimalWidth = cursorWidth === CURSOR_MINIMAL_WIDTH

    function resizeCursorTo(width: number) {
        setCursorWidth(clamp(width, CURSOR_MINIMAL_WIDTH, allowedMaxWidth))
    }

    function resizeCursor(delta: number) {
        resizeCursorTo(cursorWidth + delta)
    }

    function resizeCursorToMinimal() {
        resizeCursorTo(CURSOR_MINIMAL_WIDTH)
    }

    function resizeCursorToMaximal() {
        resizeCursorTo(allowedMaxWidth)
    }

    useEffect(() => {
        if (cursorWidth > allowedMaxWidth) {
            resizeCursorToMaximal()
        }
    }, [cursorPosition])

    useEffect(() => {
        if (cursorPosition > maxPosition) {
            return moveCursorToEnd()
        }

        if (cursorPosition < minPosition) {
            return moveCursorToStart()
        }
    }, [maxPosition, minPosition])

    return {
        ...restUseCursorOutput,

        cursorPosition,
        cursorWidth,
        indexAfterCursor,
        isCursorMinimalWidth,

        moveCursorToStart,
        moveCursorToEnd,

        resizeCursorTo,
        resizeCursor,
        resizeCursorToMinimal,
        resizeCursorToMaximal,
    }
}
