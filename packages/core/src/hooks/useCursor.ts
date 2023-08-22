import React from 'react'
import { clamp, moduloSequence } from '@/utils.js';

export type UseCursorOptions = {
    isRepeating?: boolean
    minPosition?: number
    maxPosition: number
}

export type UseCursorResult = {
    position: number
    move: (offset: number) => void
    next: () => void
    previous: () => void
}


function useCursor({
    isRepeating = false,
    maxPosition,
    minPosition = 0,
}: UseCursorOptions): UseCursorResult {
    const [position, setPosition] = React.useState(minPosition)

    function move(offset: number) {
        setPosition((position) => {
            return isRepeating
                ? moduloSequence(position + offset, maxPosition, minPosition)
                : clamp(position + offset, maxPosition - 1, minPosition)
        })
    }

    function next() {
        move(1)
    }

    function previous() {
        move(-1)
    }

    return {
        position,
        move,
        next,
        previous,
    }
}

export { useCursor }
