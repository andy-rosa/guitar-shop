import {Link} from "react-router-dom";

export function RegistrationTitle() {
    return (
        <p className="login__text">Hовый пользователь? <Link className="login__link" to={'/registration'}>
            Зарегистрируйтесь</Link> прямо сейчас</p>
    )
}