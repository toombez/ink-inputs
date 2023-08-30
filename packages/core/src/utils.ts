export function clamp(number: number, min: number, max: number) {
    return Math.min(Math.max(number, min), max)
}

export function moduloCycleSequence(number: number, min: number, max: number) {
    const length = max + 1 - min
    return (number % length + length - min) % length + min
}
