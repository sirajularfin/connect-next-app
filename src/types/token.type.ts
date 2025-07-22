interface ITokenResponse {
  userId: string;
  refreshToken: string;
  accessToken: string;
  createdAt: Date;
  tokenExpiry: Date;
}

export default ITokenResponse;
