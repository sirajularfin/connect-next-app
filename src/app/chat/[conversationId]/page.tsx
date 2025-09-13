'use client';

import { useParams } from 'next/navigation';
import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';

import ProfileHeader from '@/components/ProfileHeader/ProfileHeader';
import { useLazyGetChatMessagesQuery } from '@/integrations/http/endpoints/chat';
import { RootState } from '@/redux/store';

const ChatSection = () => {
  const { conversationId } = useParams();
  const [trigger, { data, isSuccess, isLoading }] =
    useLazyGetChatMessagesQuery();

  const { conversations } = useSelector(
    (state: RootState) => state.conversation
  );

  useEffect(() => {
    if (conversationId) {
      const id = Array.isArray(conversationId)
        ? conversationId[0]
        : conversationId;
      trigger({ conversationId: id });
    }
  }, [conversationId]);

  const selectedConversation = useMemo(
    () =>
      conversations.find(
        conversation => conversation.id === Number(conversationId)
      ),
    [conversationId]
  );

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isSuccess && (
        <ProfileHeader
          profileImageUrl={selectedConversation?.participant?.avatar ?? ''}
          username={selectedConversation?.participant?.name ?? ''}
          isOnline={selectedConversation?.participant?.isOnline ?? false}
        />
      )}
    </div>
  );
};

export default ChatSection;
