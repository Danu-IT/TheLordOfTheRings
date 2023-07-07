import { ComponentType, lazy } from "react";

const Home = lazy(() => import('../pages/General/Home'))
const Register = lazy(() => import('../pages/Public/Register'))
const Login = lazy(() => import('../pages/Public/Login'))
const Character = lazy(() => import('../pages/Private/Character/Character'))
const Favorite = lazy(() => import('../pages/Private/Favorite/Favorite'))

export interface IRoute {
  path: string;
  component: ComponentType;
  type: string;
}


export enum RoutesNamesPrivate {
    HOME = "/",
    CHARACTER = "/:id",
    FAVORITE = '/favorite'
}

export enum RoutesNamesPublic {
    HOME = "/",
    LOGIN = "/login",
    REGISTER = "/register"
}

export const navbarRoutes: IRoute[] = [
    { path: RoutesNamesPrivate.HOME, component: Home, type: "Домашняя" },
    { path: RoutesNamesPrivate.FAVORITE, component: Favorite, type: "Избранное" }
]

export const privateRoutes: IRoute[] = [
    { path: RoutesNamesPrivate.HOME, component: Home, type: "Home" },
    { path: RoutesNamesPrivate.CHARACTER, component: Character, type: "Character" },
    { path: RoutesNamesPrivate.FAVORITE, component: Favorite, type: "Favorite" },
];

export const publicRoutes: IRoute[] = [
    { path: RoutesNamesPublic.HOME, component: Home, type: "Home" },
    { path: RoutesNamesPublic.LOGIN, component: Login, type: "Login" },
    { path: RoutesNamesPublic.REGISTER, component: Register, type: "Register" },
];