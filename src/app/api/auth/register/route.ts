import { NextRequest, NextResponse } from 'next/server';

import { AuthTokenSchemaType } from '@/common/validations/auth-token.schema';
import { httpClient } from '@/network/httpClient';
import { UserAuthUrls } from '@/network/types';

export async function POST(req: NextRequest) {
  const { email, password, firstName, lastName } = await req.json();

  const res = await httpClient.post<AuthTokenSchemaType>(
    UserAuthUrls.ROOT + UserAuthUrls.REGISTRATION,
    {
      email,
      password,
      firstName,
      lastName,
    }
  );

  const { accessToken, refreshToken, tokenExpiry } = res;
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
