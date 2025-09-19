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

const Button = React.forwardRef<
  HTMLButtonElement,
  PropsWithChildren<ButtonProps>
>(
  (
    {
      children,
      title,
      loading = false,
      type = 'button',
      variant = 'PRIMARY',
      titleCase,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={classNames(classes.container, classes[variant])}
        style={titleCase && { textTransform: titleCase }}
        {...props}
      >
        {loading ? <CircularProgress /> : title ? title : children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
