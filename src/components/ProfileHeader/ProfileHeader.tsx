import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

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
        src={profileImageUrl}
        alt={username}
        className={classes.profileImage}
        width={40}
        height={40}
      />
      <div>
        <Typography>{username}</Typography>
        <div>
          <span
            className={classNames(
              { [classes.onlineIndicator]: isOnline },
              { [classes.offlineIndicator]: !isOnline }
            )}
          ></span>
          <Typography>
            {isOnline ? t('profile_online') : t('profile_offline')}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
