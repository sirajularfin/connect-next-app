import React from 'react';
import Typography from '../Typography/Typography';
import classes from './TextInput.module.scss';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  helperText?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  error,
  helperText,
  ...props
}) => {
  return (
    <div className={classes.container}>
      <input className={classes.textInput} {...props} />
      {error && (
        <Typography as="span" className={classes.error}>
          {error}
        </Typography>
      )}
      {helperText && (
        <Typography className={classes.helperText}>{helperText}</Typography>
      )}
    </div>
  );
};

export default TextInput;
