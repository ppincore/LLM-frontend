import { Routes, Route, useNavigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { publicRoutes,staticRoute, privateRoutes } from '../../shared/const/routes';
import { useEffect } from 'react';
import { useAppSelector } from '../../shared/lib/hooks/useAppSelector/useAppSelector';
import { selectIsInit } from '../../entities/User/model/selectors/selectors';


const AppRouter = () => {
  const isAuth = useAppSelector(selectIsInit)
  const navigate = useNavigate();

  console.debug(isAuth)
  useEffect(() => {
    if (isAuth) {
      navigate('/', { replace: true });
    }

  console.debug(isAuth)
  }, [isAuth]);

  return (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          path={route.path}
          element={
            <ProtectedRoute
              authOnly
              children={route.component}
              isAuth={isAuth}
            />
          }
        />
      ))}
      {publicRoutes.map((route) => (
        <Route
          path={route.path}
          element={
            <ProtectedRoute children={route.component} isAuth={isAuth} />
          }
        />
      ))}
      <Route path={staticRoute.path} element={staticRoute.component} />
    </Routes>
  );
};

export default AppRouter;
