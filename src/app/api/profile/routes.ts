import { HttpStatusCode } from 'axios';
import { NextRequest, NextResponse } from 'next/server';

import { UserProfile } from '@/common/types/profile.type';
import logger from '@/common/util/logger.util';

export async function GET(request: NextRequest) {
  try {
    const response = await fetch('http://localhost:3000/api/profile');
    const data: UserProfile = await response.json();
    return NextResponse.json({
      data,
    });
  } catch (error) {
    logger(
      `[ApiError][${request.method.toUpperCase()}][${request.url}]\nMessage: ${error}`,
      'error'
    );
    return NextResponse.json(
      { error: HttpStatusCode.InternalServerError },
      { status: 500 }
    );
  }
}
