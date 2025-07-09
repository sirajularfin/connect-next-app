import React, { PropsWithChildren } from 'react';
import classes from './Button.module.scss';

type ButtonProps = Partial<
  Pick<React.HTMLProps<HTMLButtonElement>, 'onClick' | 'disabled' | 'type'> & {
    title: string;
  }
>;

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  ...props
}) => {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={classes.container}
      type={'submit'}
    >
      {children}
    </button>
  );
};

export default Button;
