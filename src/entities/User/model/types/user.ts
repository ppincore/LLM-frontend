export interface IUser {
  id?: string;
  email?: string;
  activationLink?: string;
}

export interface IUserSchema {
  userData?: IUser;
  token?: string;
  isActivated?: boolean;
}
