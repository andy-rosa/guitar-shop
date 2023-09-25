import {useLocation, useNavigate} from "react-router-dom";
import {RouterPath} from "../../../app/provider/router/router";

export function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <section className="error">
            <h1 className="error__title">404</h1><span className="error__subtitle">Страница не найдена.</span>
            <p className="error__text"> Возможно, страница была удалена или<br />её вовсе не существовало.</p>
            <button className="button button__error button--small button--black-border" onClick={() => navigate(RouterPath.Home)}>Продолжить покупки</button>
        </section>
    )
}