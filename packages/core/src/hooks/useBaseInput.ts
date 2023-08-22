import { BaseInputProps, BaseRenderProps, UseFocusOptions } from "@types";
import { useFocus } from "ink";
import React from "react";

export type UseBaseInputOptions = Pick<BaseInputProps,
    'id'
    | 'isDisabled'
    | 'autoFocus'
    | 'onBlur'
    | 'onFocus'
>

export type UseBaseInputResult = Pick<BaseRenderProps,
    'focus'
    | 'isDisabled'
    | 'isFocused'
>

const UseBaseInput = ({
    id,
    autoFocus,
    isDisabled = false,
    onBlur = () => {},
    onFocus = () => {},
}: UseBaseInputOptions): UseBaseInputResult => {
    const focusOptions: UseFocusOptions = {
        autoFocus,
        id,
        isActive: !isDisabled,
    }

    const { focus, isFocused } = useFocus(focusOptions)

    React.useEffect(isFocused ? onFocus : onBlur, [isFocused])

    return {
        isDisabled,
        isFocused,
        focus,
    }
}

export { UseBaseInput }
