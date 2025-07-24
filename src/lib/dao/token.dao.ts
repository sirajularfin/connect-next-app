import { Token } from '../models/token.model';
import { AuthTokenSchemaType } from '../validations/auth-token.schema';

export const createToken = async (
  userId: string,
  accessToken: string,
  refreshToken: string
): Promise<AuthTokenSchemaType> => {
  const token = new Token({
    userId,
    accessToken,
    refreshToken,
  });

  await token.save();
  return {
    userId: token.userId,
    accessToken: token.accessToken,
    refreshToken: token.refreshToken,
    createdAt: token.createdAt,
    tokenExpiry: token.tokenExpiry,
  };
};

export const findTokenByRefreshToken = async (
  refreshToken: string
): Promise<boolean> => {
  const res = await Token.findOne({ refreshToken });
  return !!res;
};

export const deleteTokenByAccessToken = async (
  token: string
): Promise<boolean | null> => {
  return await Token.findOneAndDelete({ accessToken: token });
};
