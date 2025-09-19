'use client';

import React, { useRef, useState } from 'react';

import { SettingsIcon } from '@/assets';
import Button from '@/components/Button/Button';
import SettingsPopup from '@/components/SettingsPopup/SettingsPopup';
import classes from './sidebar.module.scss';

const Sidebar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const settingsButtonRef = useRef<HTMLButtonElement>(null);

  const handleSettingsClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={classes.container}>
      <Button
        variant="LINK"
        onClick={handleSettingsClick}
        ref={settingsButtonRef}
      >
        <SettingsIcon />
      </Button>
      <SettingsPopup
        isOpen={isMenuOpen}
        onClose={handleMenuClose}
        anchorEl={settingsButtonRef.current}
      />
    </div>
  );
};

export default Sidebar;
