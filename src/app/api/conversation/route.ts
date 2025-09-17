import { NextResponse } from 'next/server';

import { ConversationListResponse } from '@/common/types/chat.type';
import { httpClient } from '@/network/httpClient';
import { MessagingUrls } from '@/network/types';

export async function GET() {
  const response = await httpClient.get<ConversationListResponse>(
    MessagingUrls.ROOT + MessagingUrls.CONVERSATIONS_LIST
  );
  return NextResponse.json({
    data: response,
  });
}
