import { rtkApi } from "../../../shared/api/rtkApi";
import type {
  IAuthData,
  ILoginResponse,
  IRegisterData,
  IRegisterFormData,
  IRegisterResponse,
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
  }),
});

const useAuthByEmail = authApi.useAuthByEmailMutation;

export { useAuthByEmail };
