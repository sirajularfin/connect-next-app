'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import React from 'react';

import ChatInput from '@/components/ChatInput/ChatInput';
import ChatMessage from '@/components/ChatMessage/ChatMessage';
import CircularProgress from '@/components/CircularProgress/CircularProgress';
import ProfileHeader from '@/components/ProfileHeader/ProfileHeader';
import Typography from '@/components/Typography/Typography';
import { useGetChatMessagesQuery } from '@/integrations/http/endpoints/chat.api';
import classes from './section.module.scss';

const ChatSection = () => {
  const t = useTranslations();
  const { conversationId } = useParams();
  const { data, isLoading, isError } = useGetChatMessagesQuery({
    conversationId: String(conversationId),
  });

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError || !data) {
    return <Typography>{t('error_something_went_wrong')}</Typography>;
  }

  return (
    <React.Fragment>
      <ProfileHeader
        profileImageUrl={data.sender?.avatar ?? ''}
        username={data.sender?.name ?? ''}
        isOnline={data.sender?.isOnline}
      />
      <div className={classes.messageContainer}>
        {data.messages?.length > 0 ? (
          data.messages.map(message => (
            <ChatMessage
              key={message.id}
              senderId={message.senderId}
              content={message.content}
              timestamp={message.createdAt}
              isEdited={message.isEdited}
              isDeleted={message.isDeleted}
              isRead={message.isRead}
            />
          ))
        ) : (
          <></>
        )}
      </div>
      <ChatInput />
    </React.Fragment>
  );
};

export default ChatSection;
