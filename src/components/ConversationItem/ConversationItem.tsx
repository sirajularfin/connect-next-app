import Image from 'next/image';
import React from 'react';

import ProfileImage from '@/assets/images/profile-image.png';
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
        src={avatar ?? ProfileImage}
        alt={`Profile Picture - ${name}`}
        width={50}
        height={50}
      />
      <div className={classes.info}>
        <Typography className={classes.name}>{name}</Typography>
        <Typography className={classes.message}>{lastMessage}</Typography>
        <Typography className={classes.timestamp}>{timestamp}</Typography>
      </div>
    </div>
  );
};

export default ConversationItem;
