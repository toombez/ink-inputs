export function clamp(number: number, max: number, min: number) {
    return Math.min(Math.max(number, min), max)
}
