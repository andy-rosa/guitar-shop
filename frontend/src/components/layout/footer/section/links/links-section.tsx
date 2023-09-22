import {linksItems} from "./link-item/links.items";
import {LinkItem} from "./link-item/link-item";

export function LinksSection() {
    return (
        <section className="footer__nav-section footer__nav-section--links">
            <h2 className="footer__nav-title footer__nav-title--links">Информация</h2>
            <ul className="footer__nav-list">
                {linksItems.map(({title, href}) => (
                    <LinkItem href={href} title={title} key={title} />
                ))}
            </ul>
        </section>
    )
}