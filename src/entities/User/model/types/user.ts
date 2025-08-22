export interface IUser {
  id?: string;
  email?: string;
  activationLink?: string;
  isActivated?: boolean;
}

export interface IUserSchema {
  userData?: IUser;
  token?: string;
  _init?: boolean;
}
