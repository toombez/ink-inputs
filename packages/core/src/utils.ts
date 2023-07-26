export function clamp(number: number, max: number, min: number) {
    return Math.min(Math.max(number, min), max)
}

export function moduloSequence(number: number, max: number, min: number = 0) {
    const length = max - min

    return (number % length + length - min) % length + min
}

