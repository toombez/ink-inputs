import { useEffect } from "react"
import { useFocus } from "ink"
import type {
    UseFocusableElementOptions,
    UseFocusableElementOutput,
} from "./useFocusableElement.types.js"

export const useFocusableElement = ({
    id,
    autoFocus,
    isDisabled = false,
    onBlur = () => {},
    onFocus = () => {},
}: UseFocusableElementOptions): UseFocusableElementOutput => {
    const { focus, isFocused } = useFocus({
        autoFocus,
        id,
        isActive: !isDisabled,
    })

    useEffect(isFocused ? onFocus : onBlur, [isFocused])

    return {
        isDisabled,
        isFocused,
        focus,
    }
}
