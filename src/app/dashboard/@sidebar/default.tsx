import React from 'react';

import { SettingsIcon } from '@/assets';
import Button from '@/components/Button/Button';
import classes from './sidebar.module.scss';

const Sidebar: React.FC = () => {
  return (
    <div className={classes.container}>
      <Button variant="LINK">
        <SettingsIcon />
      </Button>
    </div>
  );
};

export default Sidebar;
