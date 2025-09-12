import Image from 'next/image';
import React from 'react';

import ProfileImage from '@/assets/images/profile-image.png';
import { formatTimestamp } from '@/common/util/date.util';
import { useRouter } from 'next/navigation';
import Typography from '../Typography/Typography';
import classes from './ConversationItem.module.scss';

interface IProps {
  avatar: string;
  name: string;
  lastMessage: string;
  timestamp: string;
  conversationId: string;
}

const ConversationItem: React.FC<IProps> = ({
  conversationId,
  avatar,
  name,
  lastMessage,
  timestamp,
}) => {
  const router = useRouter();

  return (
    <div
      className={classes.container}
      onClick={() => {
        router.push(`/chat/${conversationId}`);
      }}
    >
      <Image
        width={40}
        height={40}
        src={avatar ?? ProfileImage}
        alt={`Profile Picture - ${name}`}
        className={classes.profileImage}
      />
      <div className={classes.info}>
        <div>
          <Typography className={classes.username}>{name}</Typography>
          <Typography className={classes.timestamp}>
            {formatTimestamp(timestamp)}
          </Typography>
        </div>
        <Typography className={classes.message}>{lastMessage}</Typography>
      </div>
    </div>
  );
};

export default ConversationItem;
