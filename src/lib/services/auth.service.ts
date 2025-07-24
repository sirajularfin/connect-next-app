import * as AuthDAO from '@/lib/dao/auth.dao';
import * as TokenService from '@/lib/services/token.service';
import { AuthTokenSchemaType } from '@/lib/validations/auth-token.schema';
import { LoginUserSchemaType } from '@/lib/validations/login-user.schema';
import { RegisterUserSchemaType } from '@/lib/validations/register-user.schema';
import { UserAuthResponseSchemaType } from '@/lib/validations/user-auth-response.schema';
import { API_RESPONSE_CODES } from '@/types/constants';
import { compareHashedMessage, generateHashedMessage } from '@/util/aes.util';

export const register = async (
  input: RegisterUserSchemaType
): Promise<UserAuthResponseSchemaType> => {
  const existingUser = await AuthDAO.findUserByEmail(input.email);
  if (existingUser) throw new Error(API_RESPONSE_CODES.USER_ALREADY_EXISTS);

  const hashedPassword = await generateHashedMessage(input.password);
  const newUser = await AuthDAO.createUser({
    ...input,
    password: hashedPassword,
  });

  const response = await TokenService.generateTokens(newUser._id.toHexString());

  return {
    user: {
      id: newUser._id.toHexString(),
      email: newUser.email,
      createdAt: newUser?.createdAt?.toISOString() ?? '',
    },
    accessToken: response.accessToken,
    refreshToken: response.refreshToken,
    message: API_RESPONSE_CODES.USER_REGISTERED_SUCCESSFULLY,
  };
};

export const login = async (
  input: LoginUserSchemaType
): Promise<AuthTokenSchemaType> => {
  const user = await AuthDAO.findUserByEmail(input.email);
  if (!user) throw new Error(API_RESPONSE_CODES.INVALID_CREDENTIALS);

  const isValid = await compareHashedMessage(input.password, user.password);
  if (!isValid) throw new Error(API_RESPONSE_CODES.INVALID_CREDENTIALS);

  return await TokenService.generateTokens(user._id.toHexString());
};
