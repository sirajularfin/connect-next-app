import React from 'react';

interface ICreateStyles {
  [key: string]: React.CSSProperties;
}

const createStyles = <U extends ICreateStyles>(styles: U): U => styles;

export default createStyles;
