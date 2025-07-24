import { HttpStatusCode } from 'axios';
import { NextRequest, NextResponse } from 'next/server';

import { connectToDatabase } from '@/lib/mongoose';
import { register } from '@/lib/services/auth.service';
import { RegisterUserSchema } from '@/lib/validations/register-user.schema';
import { API_RESPONSE_CODES } from '@/types/constants';

export async function POST(req: NextRequest) {
  await connectToDatabase();
  const { firstName, lastName, email, password } = await req.json();
  const validationError = await RegisterUserSchema.safeParseAsync({
    firstName,
    lastName,
    email,
    password,
  });

  if (!validationError.success) {
    return NextResponse.json(
      {
        error: API_RESPONSE_CODES.VALIDATION_ERROR,
      },
      { status: HttpStatusCode.BadRequest }
    );
  }
  try {
    const response = await register({ firstName, lastName, email, password });
    return NextResponse.json({ response }, { status: HttpStatusCode.Ok });
  } catch {
    return NextResponse.json(
      { message: API_RESPONSE_CODES.SERVER_ERROR },
      { status: HttpStatusCode.InternalServerError }
    );
  }
}
