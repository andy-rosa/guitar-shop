import {PropsWithChildren} from "react";


export interface SocialItemProps {
    href: string;
    label: string;
}
export function SocialItem({label, href, children}: PropsWithChildren<SocialItemProps>) {
    return (
        <li className="socials-item">
            <a className="socials__link" href={href} aria-label={`Мы в ${label}`} >
                { children }
            </a>
        </li>
    )
}