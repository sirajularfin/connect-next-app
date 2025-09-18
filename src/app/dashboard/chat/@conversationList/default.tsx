import { getTranslations } from 'next-intl/server';
import React from 'react';

import { SearchIcon } from '@/assets';
import { TConversationListResponse } from '@/common/types/chat.type';
import ConversationItem from '@/components/ConversationItem/ConversationItem';
import TextInput from '@/components/TextInput/TextInput';
import Typography from '@/components/Typography/Typography';
import { API_URLS } from '@/network/apiConstants.type';
import { httpClient } from '@/network/httpClient';
import classes from './conversationList.module.scss';

const ConversationList: React.FC = async () => {
  const t = await getTranslations();
  const { data } = await httpClient.get<TConversationListResponse>(
    API_URLS.MESSAGING.getConversations
  );

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
        {Boolean(data?.items?.length) &&
          data?.items?.map(conversation => (
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

export default ConversationList;
