import { rtkApi } from "../../../shared/api/rtkApi";
import type {
  IAuthData,
  ILoginResponse,
  ILogoutResponse,
} from "../model/types/authentication";

const authApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    authByEmail: build.mutation<ILoginResponse, IAuthData>({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
    }),
    logOut: build.mutation<ILogoutResponse, void>({ // позднее вынести логаут из атунтификации
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
    }),
  }),
});

const useAuthByEmail = authApi.useAuthByEmailMutation;
const useLogOutUser = authApi.useLogOutMutation;

export { useAuthByEmail, useLogOutUser };
