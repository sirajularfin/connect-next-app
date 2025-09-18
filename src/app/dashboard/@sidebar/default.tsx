import React from 'react';

import { SettingsIcon } from '@/assets';
import classes from './sidebar.module.scss';

const Sidebar: React.FC = () => {
  return (
    <div className={classes.container}>
      <SettingsIcon />
    </div>
  );
};

export default Sidebar;
