import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

import { ProfilePlaceholder } from '@/assets';
import Typography from '../Typography/Typography';
import classes from './ProfileHeader.module.scss';

interface IProps {
  profileImageUrl: string;
  username: string;
  isOnline: boolean;
}

const ProfileHeader: React.FC<IProps> = ({
  profileImageUrl,
  username,
  isOnline,
}) => {
  const t = useTranslations();

  return (
    <div className={classes.container}>
      <Image
        width={50}
        height={50}
        src={profileImageUrl ?? ProfilePlaceholder}
        alt={`Profile Picture - ${username}`}
        className={classes.profileImage}
      />
      <div>
        <Typography className={classes.username}>{username}</Typography>
        <div>
          <span
            className={classNames(
              { [classes.onlineIndicator]: isOnline },
              { [classes.offlineIndicator]: !isOnline }
            )}
          ></span>
          <div className={classes.statusContainer}>
            <div
              className={classNames(
                classes.statusIcon,
                { [classes.onlineStatus]: isOnline },
                { [classes.offlineStatus]: !isOnline }
              )}
            ></div>
            <Typography className={classes.statusText}>
              {isOnline ? t('profile_online') : t('profile_offline')}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
