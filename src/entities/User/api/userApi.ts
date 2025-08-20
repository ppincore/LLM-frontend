import { rtkApi } from '../../../shared/api/rtkApi';
import { parseJwt } from '../../../shared/lib/utils/parseJwt';
import type { IUser } from '../model/types/user';
import { ACCESS_TOKEN_LOCAL_STORAGE_KEY } from '../../../shared/const/browserStorage';

export const userApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getDetails: build.query<IUser, void>({
      query: () => {
        const accessToken =
          localStorage.getItem(ACCESS_TOKEN_LOCAL_STORAGE_KEY) ?? '';
        const userData = parseJwt<IUser>(accessToken);
        return {
          url: `/users/${userData.id}`,
        };
      },
    }),
  }),
});


const useUserData = userApi.useGetDetailsQuery;

export { useUserData };


