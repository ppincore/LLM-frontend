import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { parseJwt } from "../../../../shared/lib/utils/parseJwt";
import { ACCESS_TOKEN_LOCAL_STORAGE_KEY } from "../../../../shared/const/browserStorage";
import type { IUser, IUserSchema } from "../types/user";

const offAuthState: IUserSchema = {
  _init: false,
  token: "",
  userData: {},
};

const isAuthDisabled = import.meta.env.VITE_IS_AUTH_DISABLED;

const initialState: IUserSchema = isAuthDisabled
  ? offAuthState
  : { _init: false };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      const token = action.payload;
      if (!token) {
        return;
      }
      state.userData = parseJwt<IUser>(token);
      state.token = token;
      localStorage.setItem(ACCESS_TOKEN_LOCAL_STORAGE_KEY, token);
    },
    initAuthData: (state) => {
      if (state._init) {
        return;
      }
      const token = localStorage.getItem(ACCESS_TOKEN_LOCAL_STORAGE_KEY)
      if(token){
        state.userData = parseJwt<IUser>(token)
        state.token = token
      }

      state._init = true;
    },
  },
  selectors: {
    selectIsInit: (state) => state._init,
    getUserAuthData: (state) => state.userData,
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
