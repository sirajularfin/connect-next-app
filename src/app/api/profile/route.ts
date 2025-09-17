import { NextResponse } from 'next/server';

import { UserProfile } from '@/common/types/profile.type';
import { httpClient } from '@/network/httpClient';
import { UserProfileUrls } from '@/network/types';

export async function GET() {
  const response = await httpClient.get<UserProfile>(
    UserProfileUrls.ROOT + UserProfileUrls.PROFILE
  );
  return NextResponse.json({
    data: response,
  });
}
