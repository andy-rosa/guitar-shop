
export interface  LinkItemProps {
    href: string;
    title: string;
}

export function LinkItem({href, title}: LinkItemProps) {
    return (
        <li className="footer__nav-list-item">
            <a className="link footer__nav-link" href={href}>{title}</a>
        </li>
    )
}