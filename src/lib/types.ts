export interface UserData {
  id: string;
  email: string;
  given_name: string;
  family_name: string;
}
export interface InitType {
  loading: boolean;
  data: [];
  error: boolean;
}

export interface IUser extends Document {
  id: string;
  email: string;
  //   password: string;
  //   isVerified: boolean;
  //   isAdmin: boolean;
  //   tokenExpire: Date;
}
