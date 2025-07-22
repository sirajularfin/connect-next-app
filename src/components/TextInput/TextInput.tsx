import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import React from 'react';
import Typography from '../Typography/Typography';
import classes from './TextInput.module.scss';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string[];
  helperText?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  error,
  helperText,
  ...props
}) => {
  const t = useTranslations();

  return (
    <div className={classes.container}>
      <input
        className={classNames(classes.textInput, {
          [classes.textInputError]: error,
        })}
        {...props}
      />
      {Array.isArray(error) && error.length > 0 && (
        <Typography className={classes.error}>{t(error[0])}</Typography>
      )}
      {helperText && (
        <Typography className={classes.helperText}>{t(helperText)}</Typography>
      )}
    </div>
  );
};

export default TextInput;
