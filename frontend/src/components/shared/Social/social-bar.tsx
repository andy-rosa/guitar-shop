import {SocialItem} from "./social-item/social-item";
import {socialItems} from "./social-item/social.items";

export function SocialBar() {
    return (
        <div className="socials footer__socials">
            <ul className="socials__list">
                {socialItems.map(({label, href, Icon}) =>
                    <SocialItem href={href} label={label} key={label}>
                        {Icon}
                    </SocialItem>
                )}
            </ul>
        </div>
    )
}