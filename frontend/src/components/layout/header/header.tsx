import {Logo} from "../../shared/logo/logo";
import {Navbar} from "../../shared/navbar/navbar";
import {ReactComponent as UserIcon} from '../../../assets/icons/active-user.svg'
import {memo} from "react";

export const Header = memo(() => {
    return (
        <header className="header--admin header" id="header">
            <div className="container">
                <div className="header__wrapper">
                    <Logo />
                    <Navbar />
                    <div className="header__container">
                        <span className="header__user-name">Имя</span>
                        <a className="header__link" href="login.html" aria-label="Перейти в личный кабинет">
                        <UserIcon />
                            <span className="header__link-text">Вход</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
})