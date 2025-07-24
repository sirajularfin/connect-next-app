import { connectToDatabase } from '@/lib/mongoose';
import * as AuthService from '@/lib/services/auth.service';
import { LoginUserSchema } from '@/lib/validations/login-user.schema';
import { API_RESPONSE_CODES } from '@/types/constants';
import { HttpStatusCode } from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  await connectToDatabase();
  const { email, password } = await req.json();
  const validationError = await LoginUserSchema.safeParseAsync({
    email,
    password,
  });

  if (!validationError.success) {
    return NextResponse.json(
      {
        message: API_RESPONSE_CODES.VALIDATION_ERROR,
      },
      { status: HttpStatusCode.BadRequest }
    );
  }

  try {
    const token = await AuthService.login({ email, password });
    return NextResponse.json({ token }, { status: HttpStatusCode.Ok });
  } catch {
    return NextResponse.json(
      { message: API_RESPONSE_CODES.INVALID_CREDENTIALS },
      { status: HttpStatusCode.Unauthorized }
    );
  }
}
