export type UseOpenableElementOptions = {
    isAutoOpen?: boolean

    onClose?: () => void
    onOpen?: () => void
    onToggle?: () => void
}

export type UseOpenableElementOutput = {
    isOpened: boolean
    open: () => void
    close: () => void
    toggle: () => void
}
