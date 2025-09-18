import { NextResponse } from 'next/server';

import { AuthTokenSchemaType } from '@/common/validations/auth-token.schema';
import { API_URLS } from '@/network/apiConstants.type';
import { httpClient } from '@/network/httpClient';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const res = await httpClient.post<AuthTokenSchemaType>(
    API_URLS.AUTH.postLogin,
    {
      email,
      password,
    }
  );

  const { accessToken, refreshToken, tokenExpiry } = res.data;
  const response = NextResponse.json({ success: true });

  // Access token
  response.cookies.set('access_token', accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: tokenExpiry,
  });

  // Refresh token
  response.cookies.set('refresh_token', refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: 60 * 60 * 2, // 2 hours
  });

  return response;
}
