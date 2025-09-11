'use client';

import { useTranslations } from 'next-intl';

import { useGetConversationListQuery } from '@/integrations/http/endpoints/chat';
import ConversationItem from '../ConversationItem/ConversationItem';
import TextInput from '../TextInput/TextInput';
import classes from './ChatSidebar.module.scss';

const ChatSidebar: React.FC = () => {
  const t = useTranslations();

  const { data } = useGetConversationListQuery();

  return (
    <div className={classes.container}>
      <TextInput
        id="search"
        type="text"
        name="search"
        placeholder={t('chat_search_placeholder')}
      />

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
  );
};

export default ChatSidebar;
