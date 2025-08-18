import type { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface IProtectedRouteProps {
  children: ReactNode;
  authOnly?: boolean;
  isAuth: boolean;
}

const ProtectedRoute = (props: IProtectedRouteProps) => {
  const { children, authOnly, isAuth } = props;
  const location = useLocation();

  if (authOnly && !isAuth) {
    return <Navigate replace to="/login" state={{ from: location }} />;
  }
  if (!authOnly && isAuth) {
    return <Navigate replace to={'/'} />;
  }
  return children;
};

export default ProtectedRoute;
