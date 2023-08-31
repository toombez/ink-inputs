import { useEffect } from "react"
import { useFocus } from "ink"
import type {
    UseFormElementOptions,
    UseFormElementOutput,
} from "./useFormElement.types.js"

export const useFormElement = ({
    id,
    autoFocus,
    isDisabled = false,
    onBlur = () => {},
    onFocus = () => {},
}: UseFormElementOptions): UseFormElementOutput => {
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
