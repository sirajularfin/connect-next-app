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
    <>
      <input className={classes.container} {...props} />
      {error && (
        <Typography as="span" className={classes.error}>
          {error}
        </Typography>
      )}
      {helperText && <Typography>{helperText}</Typography>}
    </>
  );
};

export default TextInput;
