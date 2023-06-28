import { ComponentType, lazy } from "react";

const Home = lazy(() => import('../pages/General/Home'))
const Register = lazy(() => import('../pages/Public/Register'))
const Login = lazy(() => import('../pages/Public/Login'))

export interface IRoute {
  path: string;
  component: ComponentType;
  type: string;
}


export enum RoutesNamesPrivate {
    HOME = "/"
}

export enum RoutesNamesPublic {
    HOME = "/",
    LOGIN = "/login",
    REGISTER = "/register"
}

export const privateRoutes: IRoute[] = [
    { path: RoutesNamesPrivate.HOME, component: Home, type: "Home" },
];

export const publicRoutes: IRoute[] = [
    { path: RoutesNamesPublic.HOME, component: Home, type: "Home" },
    { path: RoutesNamesPublic.LOGIN, component: Login, type: "Login" },
    { path: RoutesNamesPublic.REGISTER, component: Register, type: "Register" },
];