export function Navbar() {
    return (
        <nav className="main-nav">
            <ul className="main-nav__list">
                <li className="main-nav__item">
                    <a className="link main-nav__link" href="main">Каталог</a>
                </li>
                <li className="main-nav__item">
                    <a className="link main-nav__link" href="#">Список товаров</a>
                </li>
            </ul>
        </nav>
    )
}