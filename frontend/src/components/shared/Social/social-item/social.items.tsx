import {SocialItemProps} from "./social-item";
import {ReactNode} from "react";
import {ReactComponent as SkypeIcon} from '../../../../assets/icons/icon-skype.svg'
import {ReactComponent as PinterestIcon} from '../../../../assets/icons/icon-pinterest.svg'
import {ReactComponent as VscoIcon} from '../../../../assets/icons/icon-vsco.svg'

interface SocialBarItem extends SocialItemProps {
    Icon: ReactNode
}

export const socialItems: SocialBarItem[] = [
    {
        href: 'https://www.skype.com/',
        label: 'skype',
        Icon: <SkypeIcon />
    },
    {
        href: 'https://www.vsco.co/',
        label: 'vsco',
        Icon: <VscoIcon />
    },
    {
        href: 'https://www.pinterest.com/',
        label: 'pinterest',
        Icon: <PinterestIcon />
    },
];