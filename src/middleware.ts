import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';
import { APP_ROUTES } from './common/types/appRoutes.type';

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const { pathname } = request.nextUrl;

  // Protected routes
  if (pathname.includes(APP_ROUTES.PROTECTED.CHAT)) {
    if (!token) {
      return NextResponse.redirect(
        new URL(APP_ROUTES.PUBLIC.LOGIN, request.url)
      );
    }
  }

  // Redirect authenticated users from login page
  if (
    (pathname === APP_ROUTES.PUBLIC.LOGIN ||
      pathname === APP_ROUTES.PUBLIC.REGISTER) &&
    token
  ) {
    return NextResponse.redirect(
      new URL(APP_ROUTES.PROTECTED.CHAT, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/chat/:path*',
    '/profile/:path*',
    '/login',
    '/api/protected/:path*',
  ],
};
