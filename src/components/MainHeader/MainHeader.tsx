import React from 'react';

import Logo from '@/assets/svg/logo';
import Button from '@/components/Button/Button';
import classes from './MainHeader.module.scss';

function MainHeader(): React.ReactElement {
  return (
    <header className={classes.container}>
      <Logo />
      <Button title="Join for Free" />
    </header>
  );
}

export default MainHeader;
