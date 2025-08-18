import { Routes, Route, useNavigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { publicRoutes, privateRoutes, staticRoute } from '../../routes/index'
// import { useSelector } from '../../store/store.ts';
// import { selectIsAuth } from '../../store/slices/userSlice/userSlice';
import { useEffect } from 'react';

const AppRouter = () => {
  // const isAuth = useSelector(selectIsAuth) || localStorage.getItem('auth');
  const isAuth = false;
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate('/', { replace: true });
    }
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
