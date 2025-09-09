'use client';

import { useParams } from 'next/navigation';
import { useEffect } from 'react';

import { useLazyGetChatMessagesQuery } from '@/integrations/http/endpoints/chat';
import ProfileHeader from '../ProfileHeader/ProfileHeader';

const ChatSection = () => {
  const { conversationId } = useParams();
  const [trigger, { data, isLoading, error }] = useLazyGetChatMessagesQuery();

  useEffect(() => {
    if (conversationId) {
      const id = Array.isArray(conversationId)
        ? conversationId[0]
        : conversationId;
      trigger({ conversationId: id });
    }
  }, [conversationId]);

  return (
    <div>
      <ProfileHeader
        profileImageUrl={data?.messages[0]?.sender?.avatar ?? ''}
        username={data?.messages[0]?.sender?.name ?? ''}
        isOnline={true}
      />
    </div>
  );
};

export default ChatSection;
