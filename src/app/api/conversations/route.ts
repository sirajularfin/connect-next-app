import { NextRequest, NextResponse } from 'next/server';

import { TConversationListResponse } from '@/common/types/chat.type';
import conversationList from '@/mocks/conversationList.json';

/**
 * DEVELOPMENT PURPOSES ONLY
 * Handles GET requests for conversation list.
 * @param request - The NextRequest object.
 * @returns A Promise that resolves to a NextResponse object containing the conversation list or an error.
 */
export async function GET(
  request: NextRequest
): Promise<NextResponse<TConversationListResponse | { error: string }>> {
  try {
    const { searchParams } = new URL(request.url);

    // Get query parameters
    const pageSize = parseInt(searchParams.get('pageSize') || '10');
    const currentPage = parseInt(searchParams.get('page') || '1');

    const filteredConversations = [...conversationList.conversations];

    // Apply pagination
    const totalElements = filteredConversations.length;
    const totalPages = Math.ceil(totalElements / pageSize);
    const offset = (currentPage - 1) * pageSize;
    const paginatedConversations = filteredConversations.slice(
      offset,
      offset + pageSize
    );

    const response: TConversationListResponse = {
      items: paginatedConversations,
      pagination: {
        currentPage,
        pageSize,
        totalPages,
        totalElements,
      },
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error fetching conversations:', error);
    return NextResponse.json(
      { error: 'Failed to fetch conversations' },
      { status: 500 }
    );
  }
}
