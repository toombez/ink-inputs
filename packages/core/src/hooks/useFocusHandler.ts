import { useFocus } from "ink"
import { useEffect } from "react"

type FocusHandler = () => void

interface UseFocusHandlerProps {
    handler?: FocusHandler
    focusOptions?: Parameters<typeof useFocus>[0]
}

/**
 * Use for add focus handler on element
 * @param props hook props
 * @returns provided useFocus hook return
 */
const useFocusHandler = ({
    handler,
    focusOptions,
}: UseFocusHandlerProps) => {
    const {
        focus,
        isFocused,
    } = useFocus(focusOptions)

    useEffect(() => {
        if (!handler || !isFocused) {
            return
        }

        handler()
    }, [isFocused])

    return {
        isFocused,
        focus,
    }
}

export default useFocusHandler
export { useFocusHandler }
export type { UseFocusHandlerProps }
