import {memo, PropsWithChildren, useId} from "react";

export interface InputProps {
    label: string;
    type: string;
    required?: boolean;
    placeholder?: string;
    autoComplete?: 'on' | 'off';
    hasValidate?: boolean
    validateMessage?: string;
}

export const Input = memo((
    {
        type,
        validateMessage = 'Заполните поле',
        label,
        hasValidate = true,
        autoComplete = 'off',
        placeholder,
        children,
        required
    }: PropsWithChildren<InputProps>) => {
    const id = useId();

    return (
        <div className="input-login">
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} name={id} autoComplete={autoComplete} required={required} placeholder={placeholder ?? ''}/>
            {children}
            {hasValidate && <p className="input-login__error">{validateMessage}</p>}
        </div>
    )
})