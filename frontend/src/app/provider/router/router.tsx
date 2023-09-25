import {createBrowserRouter, RouteObject} from "react-router-dom";
import {CardItem} from "../../../components/feature/card-list/card-item/card-item";
import {ProductCard} from "../../../components/feature/product-card/product-card";
import {NotFoundPage} from "../../../components/pages/not-found/not-found.page";
import {HomePage} from "../../../components/pages/home/home.page";
import {LoginPage} from "../../../components/pages/login/login.page";
import {RegistrationPage} from "../../../components/pages/registration/registration.page";

export enum RouterPath {
    Home = '/',
    Login = 'login',
    Registration = 'registration',
    Catalog = 'catalog',
    ProductCard = 'product',
    NotFound = '*'
}

const routers: RouteObject[] = [
    {
        path: RouterPath.Home,
        element: (
            <HomePage />
        ),
        children:
        [
            {
                path: RouterPath.Login,
                element: <LoginPage />
            },
            {
                path: RouterPath.Registration,
                element: <RegistrationPage />
            },
            {
                path: RouterPath.Catalog,
                element: (
                    <CardItem />
                )
            },
            {
                path: `${RouterPath.ProductCard}/:id`,
                element: <ProductCard />
            },
            {
                path: RouterPath.NotFound,
                element: <NotFoundPage />
            }
        ]
    }
]

export const router = createBrowserRouter(routers)