import { useTranslations } from 'next-intl';
import React, { useEffect, useRef } from 'react';

import { LogoutIcon } from '@/assets';
import logger from '@/common/util/logger.util';
import Button from '@/components/Button/Button';
import LanguageButton from '../LanguageButton/LanguageButton';
import Typography from '../Typography/Typography';
import classes from './SettingsPopup.module.scss';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  anchorEl: HTMLElement | null;
}

const SettingsPopup: React.FC<IProps> = ({ isOpen, onClose, anchorEl }) => {
  const t = useTranslations();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        anchorEl &&
        !anchorEl.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose, anchorEl]);

  const handleLogout = () => {
    // TODO: Add your logout logic here
    logger('Logging out...');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      className={classes.settingsMenu}
      style={{
        position: 'absolute',
        top: anchorEl ? anchorEl.offsetTop - anchorEl.offsetHeight - 40 : 0,
        left: anchorEl ? anchorEl.offsetLeft + anchorEl.offsetWidth : 0,
      }}
    >
      <div className={classes.menuItem}>
        <LanguageButton />
      </div>
      <div className={classes.menuItem}>
        <Button variant="LINK" onClick={handleLogout}>
          <LogoutIcon />
          <Typography>{t('text_logout')}</Typography>
        </Button>
      </div>
    </div>
  );
};

export default SettingsPopup;
