import { useState } from "react";
import { UseOpenableElementOptions, UseOpenableElementOutput } from "./useOpenableElement.types.js";

const useOpenableElement = ({
    isAutoOpen = false,
    onClose = () => {},
    onOpen = () => {},
    onToggle = () => {},
}: UseOpenableElementOptions): UseOpenableElementOutput => {
    const [isOpened, setIsOpened] = useState<boolean>(isAutoOpen)

    function open() {
        setIsOpened(true)

        onOpen()
    }

    function close() {
        setIsOpened(false)

        onClose()
    }

    function toggle() {
        const handler = isOpened ? open : close

        handler()
        onToggle()
    }

    return {
        open,
        close,
        toggle,
        isOpened,
    }
}

export { useOpenableElement }
