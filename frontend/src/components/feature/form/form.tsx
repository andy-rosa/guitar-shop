import {useLocation} from "react-router-dom";
import {Input} from "../../shared/input/input";
import {RegistrationTitle} from "./registration-title/registration-title";
import {RouterPath} from "../../../app/provider/router/router";
import {Button} from "../../shared/button/button";
import {InputHideButton} from "./input-hide-button/input-hide-button";

export function Form() {
    const { pathname} = useLocation();
    const isLogin = pathname === `/${RouterPath.Login}`

    return (
        <section className="login">
            <h1 className="login__title">{isLogin ? 'Войти' : 'Регистрация' }</h1>
            {isLogin && <RegistrationTitle />}
            <form method="post" action="/">
                {!isLogin && <Input label='Введите имя' type='text' /> }
                <Input label="Введите e-mail" type="email" />
                <InputHideButton />
                <button className="button login__button button--medium" type="submit">{isLogin ? 'Войти' : 'Зарегестрироваться'}</button>
            </form>
        </section>
    )
}