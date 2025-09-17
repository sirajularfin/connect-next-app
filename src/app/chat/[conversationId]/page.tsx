import React from 'react';

import { TChatMessagesResponse } from '@/common/types/chat.type';
import ChatInput from '@/components/ChatInput/ChatInput';
import ChatMessage from '@/components/ChatMessage/ChatMessage';
import ProfileHeader from '@/components/ProfileHeader/ProfileHeader';
import { API_URLS } from '@/network/apiConstants.type';
import { httpClient } from '@/network/httpClient';
import classes from './section.module.scss';

interface IProps {
  params: { conversationId: string };
}

const ChatSection = async ({ params }: IProps) => {
  const { conversationId } = params;
  const { data } = await httpClient.get<TChatMessagesResponse>(
    API_URLS.MESSAGING.getChatMessages(conversationId)
  );

  // if (isLoading) {
  //   return <CircularProgress />;
  // }

  // if (isError || !data) {
  //   return <Typography>{t('error_something_went_wrong')}</Typography>;
  // }

  return (
    <React.Fragment>
      <ProfileHeader
        profileImageUrl={data.sender?.avatar ?? ''}
        username={data.sender?.name ?? ''}
        isOnline={data.sender?.isOnline}
      />
      <div className={classes.messageContainer}>
        {data.messages.items?.length > 0 ? (
          data.messages.items.map(message => (
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
