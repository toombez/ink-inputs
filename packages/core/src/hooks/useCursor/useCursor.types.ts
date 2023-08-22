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
