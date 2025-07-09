export interface IUserRegistrationRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface IUserRegistrationResponse {
  message: string;
}
