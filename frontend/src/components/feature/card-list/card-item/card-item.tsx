import {Link} from "react-router-dom";
import {RouterPath} from "../../../../app/provider/router/router";

interface CardItemProps {
    id: string
    img: string;
    title: string;
    price: number;
    date: Date;
}

export const CardItem = ({id}: Partial<CardItemProps>) => {
    return (
        <li className="catalog-item">
            <div className="catalog-item__data">
                <img src="./assets/img/content/catalog-product-1.png" srcSet="./assets/img/content/catalog-product-1@2x.png 2x" width="36" height="93" alt="Картинка гитары" />
                <div className="catalog-item__data-wrapper">
                    <Link className="link" to={`/${RouterPath.ProductCard}/12`}>
                        <p className="catalog-item__data-title">ЭлектроГитара Честер bass</p>
                    </Link>
                    <br />
                        <p className="catalog-item__data-date">Дата добавления 19.09.2022</p>
                        <p className="catalog-item__data-price">17 500 ₽</p>
                </div>
            </div>
            <div className="catalog-item__buttons">
                <a className="button button--small button--black-border" href="edit-item.html" aria-label="Редактировать товар">Редактировать</a>
                <button className="button button--small button--black-border" type="submit" aria-label="Удалить товар">Удалить</button>
            </div>
        </li>
    )
}