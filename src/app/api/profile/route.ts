import { NextResponse } from 'next/server';

import { IUserProfile } from '@/common/types/profile.type';
import userProfile from '@/mocks/userProfile.json';

export async function GET(): Promise<
  NextResponse<IUserProfile | { error: string }>
> {
  return NextResponse.json({ ...userProfile });
}
