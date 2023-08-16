import React from 'react'
import { UseCursorOptions, UseCursorResult } from '@types';
import { clamp, moduloSequence } from '@/utils.js';

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
