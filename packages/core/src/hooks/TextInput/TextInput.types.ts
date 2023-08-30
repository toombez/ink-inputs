import { UseFocusOptions } from "@types"

export type TextInputProps = {
    autoFocus?: UseFocusOptions['autoFocus']
    id?: UseFocusOptions['id']
    isDisabled?: UseFocusOptions['isActive']

    value?: string
    placeholder?: string | null

    onFocus?: () => void
    onBlur?: () => void
    onInput?: (value: string) => void
}
