'use client';

import React, { useEffect, useRef, useState } from 'react';

import { LanguageIcon, LogoutIcon } from '@/assets';
import Button from '@/components/Button/Button';
import Typography from '../Typography/Typography';
import classes from './SettingsPopup.module.scss';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  anchorEl: HTMLElement | null;
}

const SettingsPopup: React.FC<IProps> = ({ isOpen, onClose, anchorEl }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [currentLanguage, setCurrentLanguage] = useState('en');

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

  const handleLanguageToggle = () => {
    const newLanguage = currentLanguage === 'en' ? 'es' : 'en';
    setCurrentLanguage(newLanguage);
    // Add your language change logic here
    console.log('Language changed to:', newLanguage);
  };

  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logging out...');
    onClose();
  };

  if (!isOpen) return null;

  console.log('AnchorEl:', anchorEl);

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
        <Button variant="LINK" onClick={handleLanguageToggle}>
          <LanguageIcon />
          <Typography>Language ({currentLanguage.toUpperCase()})</Typography>
        </Button>
      </div>
      <div className={classes.menuItem}>
        <Button variant="LINK" onClick={handleLogout}>
          <LogoutIcon />
          <Typography>Logout</Typography>
        </Button>
      </div>
    </div>
  );
};

export default SettingsPopup;
