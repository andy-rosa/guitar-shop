import {createBrowserRouter, RouteObject} from "react-router-dom";
import {Layout} from "../../../components/layout/layout";
import {Form} from "../../../components/feature/form/form";
import {CardItem} from "../../../components/feature/card-list/card-item/card-item";
import {ProductCard} from "../../../components/feature/product-card/product-card";

export enum RouterPath {
    Home = '/',
    Login = 'login',
    Registration = 'registration',
    Catalog = 'catalog',
    ProductCard = 'product'
}

const routers: RouteObject[] = [
    {
        path: RouterPath.Home,
        element: (
            <Layout />
        ),
        children:
        [
            {
                path: RouterPath.Login,
                element: <Form />
            },
            {
                path: RouterPath.Registration,
                element: <Form />
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
        ]
    }
]

export const router = createBrowserRouter(routers)