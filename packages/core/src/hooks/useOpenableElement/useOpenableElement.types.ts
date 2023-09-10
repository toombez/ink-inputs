/**
 * Ink-inputs `useOpenableElement` options
 */
export type UseOpenableElementOptions = {
    isAutoOpen?: boolean

    onClose?: () => void
    onOpen?: () => void
    onToggle?: () => void
}

/**
 * Ink-inputs `useOpenableElement` output
 */
export type UseOpenableElementOutput = {
    isOpened: boolean
    open: () => void
    close: () => void
    toggle: () => void
}
