import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

import CircularProgress from '../CircularProgress/CircularProgress';
import classes from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  loading?: boolean;
  titleCase?:
    | 'none'
    | 'capitalize'
    | 'uppercase'
    | 'lowercase'
    | 'initial'
    | 'inherit';
  variant?: 'PRIMARY' | 'SECONDARY' | 'LINK';
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  title,
  loading = false,
  type = 'button',
  variant = 'PRIMARY',
  titleCase,
  ...props
}) => {
  return (
    <button
      type={type}
      className={classNames(classes.container, classes[variant], classNames)}
      style={titleCase && { textTransform: titleCase }}
      {...props}
    >
      {loading ? <CircularProgress /> : title ? title : children}
    </button>
  );
};

export default Button;
