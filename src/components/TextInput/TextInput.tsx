import React from 'react';
import classes from './TextInput.module.scss';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const TextInput: React.FC<TextInputProps> = ({ ...props }) => {
  return <input className={classes.container} {...props} />;
};

export default TextInput;
