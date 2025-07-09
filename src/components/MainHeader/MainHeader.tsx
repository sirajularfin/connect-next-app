import React from 'react';

import Logo from '@/assets/svg/logo';
import classes from './MainHeader.module.scss';

function MainHeader(): React.ReactElement {
  return (
    <header className={classes.container}>
      <Logo />
    </header>
  );
}

export default MainHeader;
