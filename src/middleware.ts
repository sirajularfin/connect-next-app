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
  if (pathname.includes(APP_ROUTES.CHAT)) {
    if (!token) {
      return NextResponse.redirect(new URL(APP_ROUTES.LOGIN, request.url));
    }
  }

  // Redirect authenticated users from login page
  if (
    (pathname === APP_ROUTES.LOGIN || pathname === APP_ROUTES.REGISTER) &&
    token
  ) {
    return NextResponse.redirect(new URL(APP_ROUTES.CHAT, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
