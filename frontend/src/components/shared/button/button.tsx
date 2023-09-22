import {ButtonHTMLAttributes, PropsWithChildren} from "react";

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;
export function Button({children, ...otherProps}: ButtonProps) {
    return (
        <button {...otherProps} className="input-login__button-eye" type="button">
            {children}
        </button>
    )
}