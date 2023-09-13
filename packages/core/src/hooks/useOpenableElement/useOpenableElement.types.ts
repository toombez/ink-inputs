/**
 * Ink-inputs `useOpenableElement` options
 */
export type UseOpenableElementOptions = {
    /**
     * Specifies whether to open the hook when hook is initialized
     */
    isAutoOpen?: boolean

    onClose?: () => void
    onOpen?: () => void
    onToggle?: () => void
}

/**
 * Ink-inputs `useOpenableElement` output
 */
export type UseOpenableElementOutput = {
    /**
     * Indicates whether the hook is open
     */
    isOpened: boolean

    open: () => void
    close: () => void
    toggle: () => void
}
