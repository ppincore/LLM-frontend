import type { IUser } from "../../../../entities/User/model/types/user";

export interface IAuthData {
  email: string;
  password: string;
}

export interface IRegisterData extends IAuthData {}

export interface IRegisterFormData extends IRegisterData {
  passwordConfirm: string;
  username: string;
}

export interface ILoginResponse {
  refreshToken?: string;
  accessToken?: string;
  user: IUser;
}

export interface IRegisterResponse {
  email?: string
}