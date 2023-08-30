import React from "react"
import { useFocus } from "ink"
import type {
    UseBaseInputOptions,
    UseBaseInputResult
} from "./useBaseInput.types.js"

const useBaseInput = ({
    id,
    autoFocus,
    isDisabled = false,
    onBlur = () => {},
    onFocus = () => {},
}: UseBaseInputOptions): UseBaseInputResult => {
    const { focus, isFocused } = useFocus({
        autoFocus,
        id,
        isActive: !isDisabled,
    })

    React.useEffect(isFocused ? onFocus : onBlur, [isFocused])

    return {
        isDisabled,
        isFocused,
        focus,
    }
}

export { useBaseInput }
