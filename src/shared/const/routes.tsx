import type { ReactNode } from "react";
import { NotFoundPage, LoginPage, MainPage, RegisterPage } from "../../pages/pages";

export interface IRoute {
  path: string;
  component: ReactNode;
}

export enum RouteNames {
  // FORGOT_PASSWORD = "/forgot_password",
  REGISTER = "/register",
  LOGIN = "/login",
  MAIN = "/", 
  NOT_FOUND = "*",
  ACCOUNT = "/profile",
}

export const staticRoute: IRoute = {
  path: RouteNames.NOT_FOUND,
  component: <NotFoundPage />,
};
export const publicRoutes: IRoute[] = [
  { path: RouteNames.LOGIN, component: <LoginPage /> },
  {path: RouteNames.REGISTER, component: <RegisterPage/>}
];
export const privateRoutes: IRoute[] = [
  { path: RouteNames.MAIN, component: <MainPage /> },
];

export const getRouteMain = () => "/";
export const getRouteLogin = () => "/login";
export const getRouteRegister = () => "/register"
export const getRouteNotFound = () => "*";
