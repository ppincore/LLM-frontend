import type { ReactNode } from 'react';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

export interface IRoute {
  path: string;
  component: ReactNode;
}

export enum RouteNames {
  FORGOT_PASSWORD = '/forgot_password',
  CREATE_ACCOUNT = '/sign_up',
  LOGIN = '/login',
  HOME = '/',
  NOT_FOUND = '*',
  ACCOUNT = '/profile',
}

export const staticRoute: IRoute = {
  path: RouteNames.NOT_FOUND,
  component: <NotFoundPage />,
};
export const publicRoutes: IRoute[] = [
  // { path: RouteNames.LOGIN, component: <Login /> },
  // { path: RouteNames.CREATE_ACCOUNT, component: <CreateAccount /> },
];
export const privateRoutes: IRoute[] = [
  // { path: RouteNames.ACCOUNT, component: <Account /> },
  // { path: RouteNames.HOME, component: <Main /> },
];