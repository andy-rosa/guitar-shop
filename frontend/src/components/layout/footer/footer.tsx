import {Logo} from "../../shared/logo/logo";
import {SocialBar} from "../../shared/Social/social-bar";
import {AboutSection} from "./section/about/about-section";
import {LinksSection} from "./section/links/links-section";
import {ContactsSection} from "./section/contacts/contacts-section";
import {memo} from "react";

export const Footer = memo(() => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__container">
                    <div className="footer__logo-wrapper">
                        <Logo />
                        <SocialBar />
                    </div>
                    <AboutSection />
                    <LinksSection />
                    <ContactsSection />
                </div>
            </div>
        </footer>
    )
})