import { ButtonProps } from "./Button.types.js"
import ButtonFallback from "./Button.fallback.js"
import { useInput } from "ink"
import { useCustomRenderElement, useFocusableElement } from '@hooks'

const Button: React.FC<ButtonProps> = ({
    label,
    onClick = () => {},
    ...rest
}) => {
    const {
        focus,
        isFocused,
        isDisabled,
    } = useFocusableElement(rest)

    const {
        Render,
    } = useCustomRenderElement({
        ...rest,
        fallback: ButtonFallback,
    })

    useInput((char, key) => {
        if (key.return || char === " ") {
            click()
        }
    }, { isActive: isFocused })

    function click() {
        onClick()
    }

    return Render({
        isDisabled,
        isFocused,
        label: label ?? null,
        click,
        focus,
    })
}

export default Button
