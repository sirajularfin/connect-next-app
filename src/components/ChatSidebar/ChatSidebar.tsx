'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

import { SearchIcon } from '@/assets';
import { useGetConversationListQuery } from '@/integrations/http/endpoints/chat';
import ConversationItem from '../ConversationItem/ConversationItem';
import TextInput from '../TextInput/TextInput';
import Typography from '../Typography/Typography';
import classes from './ChatSidebar.module.scss';

const ChatSidebar: React.FC = () => {
  const t = useTranslations();

  const { data } = useGetConversationListQuery();

  return (
    <div className={classes.sidebar}>
      <Typography className={classes.title}>
        {t('chat_sidebar_title')}
      </Typography>
      <TextInput
        id="search"
        type="text"
        name="search"
        placeholder={t('chat_search_placeholder')}
        customStyle={classes.searchBar}
        startIcon={<SearchIcon className={classes.searchIcon} />}
      />

      <div className={classes.conversationList}>
        {Boolean(data?.conversations?.length) &&
          data?.conversations?.map(conversation => (
            <ConversationItem
              key={conversation.id}
              conversationId={String(conversation.id)}
              avatar={conversation.participant.avatar}
              name={conversation.participant.name}
              lastMessage={conversation.lastMessage}
              timestamp={conversation.lastActivity}
            />
          ))}
      </div>
    </div>
  );
};

export default ChatSidebar;
