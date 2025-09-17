import { NextRequest, NextResponse } from 'next/server';

import { TChatMessagesResponse } from '@/common/types/chat.type';
import chatMessages from '@/mocks/chatMessages.json';
import conversationList from '@/mocks/conversationList.json';

/**
 * DEVELOPMENT PURPOSES ONLY
 * Handles GET requests for chat messages in a specific conversation.
 * @param request - The NextRequest object.
 * @param param1 - The conversation ID parameter.
 * @returns A Promise that resolves to a NextResponse object containing the chat messages or an error.
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { conversationId: string } }
): Promise<NextResponse<TChatMessagesResponse | { error: string }>> {
  try {
    const { conversationId } = params;
    const conversationIdNum = Number(conversationId);

    if (isNaN(conversationIdNum)) {
      return NextResponse.json(
        { error: 'INVALID_CONVERSATION_ID' },
        { status: 400 }
      );
    }

    const conversation = conversationList.conversations.find(
      convo => convo.id === conversationIdNum
    );

    if (!conversation) {
      return NextResponse.json(
        { error: 'CONVERSATION_NOT_FOUND' },
        { status: 404 }
      );
    }

    const { searchParams } = new URL(request.url);
    const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10));
    const pageSize = Math.max(
      1,
      Math.min(100, parseInt(searchParams.get('pageSize') || '10', 10))
    );

    const allMessages = chatMessages.messages.filter(
      message => message.conversationId === conversationIdNum
    );

    const totalElements = allMessages.length;
    const totalPages = Math.ceil(totalElements / pageSize);
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedMessages = allMessages.slice(startIndex, endIndex);

    const response: TChatMessagesResponse = {
      sender: conversation.participant,
      messages: {
        items: paginatedMessages,
        pagination: {
          currentPage: page,
          pageSize,
          totalPages,
          totalElements,
        },
      },
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error fetching messages:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
