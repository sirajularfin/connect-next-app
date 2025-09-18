'use client';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import React from 'react';

import { formatDateTime } from '@/common/util/date.util';
import { useProfile } from '@/context/ProfileContext';
import Typography from '../Typography/Typography';
import classes from './ChatMessage.module.scss';

interface IProps {
  senderId: number;
  content: string;
  timestamp: string;
  isEdited: boolean;
  isDeleted: boolean;
  isRead: boolean;
}

const ChatMessage: React.FC<IProps> = ({
  senderId,
  content,
  timestamp,
  isEdited,
  isDeleted,
}) => {
  const t = useTranslations();
  const { profile } = useProfile();

  return (
    <div
      className={classNames(classes.container, {
        [classes.outgoingMessage]: senderId === profile?.id,
        [classes.incomingMessage]: senderId !== profile?.id,
      })}
    >
      <Typography className={classes.content}>
        {isDeleted ? <i>{t('message_deleted')}</i> : content}
      </Typography>
      <div className={classes.footer}>
        <Typography
          className={classNames(classes.timestamp, {
            [classes.timestampDark]: senderId !== profile?.id,
          })}
        >
          {formatDateTime(timestamp)}
        </Typography>
        {isEdited ? (
          <Typography className={classes.edited}>
            {t('message_edited')}
          </Typography>
        ) : null}
      </div>
    </div>
  );
};

export default ChatMessage;
