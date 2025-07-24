import jwt, { JwtPayload } from 'jsonwebtoken';

import * as TokenDao from '@/lib/dao/token.dao';
import {
  DEFAULT_ACCESS_TOKEN_EXPIRY,
  DEFAULT_REFRESH_TOKEN_EXPIRY,
} from '@/types/constants';
import logger from '@/util/logger.util';

export const generateAccessToken = (id: string): string => {
  const ACCESS_TOKEN_SECRET = process.env.NEXT_PUBLIC_ACCESS_TOKEN_SECRET;
  return jwt.sign({ userId: id }, ACCESS_TOKEN_SECRET, {
    expiresIn: DEFAULT_ACCESS_TOKEN_EXPIRY,
  });
};

export const generateRefreshToken = (id: string): string => {
  const REFRESH_TOKEN_SECRET = process.env.NEXT_PUBLIC_REFRESH_TOKEN_SECRET;
  return jwt.sign({ userId: id }, REFRESH_TOKEN_SECRET, {
    expiresIn: DEFAULT_REFRESH_TOKEN_EXPIRY,
  });
};

export function verifyAccessToken(token: string, secret: string): JwtPayload {
  return jwt.verify(token, secret) as JwtPayload;
}

export async function generateTokens(userId: string) {
  const accessToken = generateAccessToken(userId);
  const refreshToken = generateRefreshToken(userId);
  return await TokenDao.createToken(userId, accessToken, refreshToken);
}

export const refreshToken = async (token: string) => {
  const result = await TokenDao.findTokenByRefreshToken(token);
  if (!result) {
    return undefined;
  }
  try {
    const decoded = verifyAccessToken(token, process.env.NEXT_PUBLIC_REFRESH_TOKEN_SECRET);
    const accessToken = generateAccessToken(decoded.userId);
    return { accessToken, refreshToken: token };
  } catch (err) {
    logger(`[Refresh Token] Error verifying token: ${err}`, 'error');
  }
};
