import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { userApi } from '../entities/User/api/userApi';
import { userReducer } from '../entities/User/model/slice/userSlice';

const rootReducer = combineReducers({
  user: userReducer,
  [userApi.reducerPath]: userApi.reducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware)
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
