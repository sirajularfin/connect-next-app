'use client';

import { useTranslations } from 'next-intl';

import { Conversation } from '@/common/types/chat.type';
import { useGetConversationListQuery } from '@/integrations/http/endpoints/chat';
import ConversationItem from '../ConversationItem/ConversationItem';
import TextInput from '../TextInput/TextInput';
import classes from './ChatSidebar.module.scss';

interface IProps {
  conversations?: Conversation[];
}

const ChatSidebar: React.FC<IProps> = ({ conversations }) => {
  const t = useTranslations();
  const { data, isLoading, error } = useGetConversationListQuery();

  return (
    <div className={classes.container}>
      <TextInput
        id="search"
        type="text"
        name="search"
        placeholder={t('chat_search_placeholder')}
      />

      {data?.conversations.map(c => (
        <ConversationItem
          key={c.id}
          avatar={c.participant.avatar}
          name={c.participant.name}
          lastMessage={c.lastMessage}
          timestamp={c.lastActivity}
        />
      ))}
    </div>
  );
};

export default ChatSidebar;
