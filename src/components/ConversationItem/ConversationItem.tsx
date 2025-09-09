import Image from 'next/image';
import React from 'react';

import Typography from '../Typography/Typography';
import classes from './ConversationItem.module.scss';

interface IProps {
  avatar: string;
  name: string;
  lastMessage: string;
  timestamp: string;
}

const ConversationItem: React.FC<IProps> = ({
  avatar,
  name,
  lastMessage,
  timestamp,
}) => {
  return (
    <div className={classes.container}>
      <Image src={avatar} alt={name} width={50} height={50} />
      <div className={classes.info}>
        <Typography className={classes.name}>{name}</Typography>
        <Typography className={classes.message}>{lastMessage}</Typography>
        <Typography className={classes.timestamp}>{timestamp}</Typography>
      </div>
    </div>
  );
};

export default ConversationItem;
