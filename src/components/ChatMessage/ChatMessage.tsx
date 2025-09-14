import React from 'react';

import classNames from 'classnames';
import { useTranslations } from 'next-intl';

import { formatDateTime } from '@/common/util/date.util';
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

  return (
    <div
      className={classNames(classes.container, {
        [classes.outgoingMessage]: senderId === 1,
        [classes.incomingMessage]: senderId !== 1,
      })}
    >
      <Typography className={classes.content}>
        {isDeleted ? <i>{t('message_deleted')}</i> : content}
      </Typography>
      <div className={classes.footer}>
        <Typography
          className={classNames(classes.timestamp, {
            [classes.timestampDark]: senderId !== 1,
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
