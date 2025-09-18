'use client';

import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

import ProfileImage from '@/assets/images/profile-image.png';
import { APP_ROUTES } from '@/common/types/appRoutes.type';
import { formatTimestamp } from '@/common/util/date.util';
import Typography from '@/components/Typography/Typography';
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
  const router: AppRouterInstance = useRouter();

  return (
    <div
      className={classes.container}
      onClick={() => {
        router.push(`${APP_ROUTES.CHAT}/${conversationId}`);
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
