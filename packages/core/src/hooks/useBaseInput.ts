import { UseBaseInputOptions, UseBaseInputResult, UseFocusOptions } from "@types";
import { useFocus } from "ink";
import React from "react";

const UseBaseInput = ({
    focusOptions,
    isDisabled = false,
    onBlur = () => {},
    onFocus = () => {},
}: UseBaseInputOptions): UseBaseInputResult => {
    const _focusOptions: UseFocusOptions = {
        ...focusOptions,
        isActive: isDisabled,
    }

    const { focus, isFocused } = useFocus(_focusOptions)

    React.useEffect(isFocused ? onFocus : onBlur, [isFocused])

    return {
        isDisabled,
        isFocused,
        focus,
    }
}

export { UseBaseInput }
