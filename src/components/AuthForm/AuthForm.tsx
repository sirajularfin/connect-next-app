import React from 'react';
import classes from './AuthForm.module.scss';

interface IProps {
  title: React.ReactNode;
  children: React.ReactNode;
  divider?: boolean;
  dividerText?: React.ReactNode;
  googleButton?: React.ReactNode;
  bottomText?: React.ReactNode;
}

const AuthForm: React.FC<IProps> = ({
  title,
  children,
  divider = true,
  dividerText,
  googleButton,
  bottomText,
}) => (
  <div className={classes.container}>
    {title}
    {children}
    {divider && dividerText && (
      <div className={classes.divider}>
        <hr />
        {dividerText}
        <hr />
      </div>
    )}
    {googleButton}
    {bottomText}
  </div>
);

export default AuthForm;
