import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

import classes from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  titleCase?:
    | 'none'
    | 'capitalize'
    | 'uppercase'
    | 'lowercase'
    | 'initial'
    | 'inherit';
  variant?: 'PRIMARY' | 'SECONDARY';
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  title,
  type = 'button',
  variant = 'PRIMARY',
  ...props
}) => {
  return (
    <button
      type={type}
      className={classNames(classes.container, classes[variant], classNames)}
      style={{ textTransform: props.titleCase }}
      {...props}
    >
      {title ?? children}
    </button>
  );
};

export default Button;
