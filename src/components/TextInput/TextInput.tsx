import React from 'react';

type IProps = Partial<
  Pick<
    React.InputHTMLAttributes<HTMLInputElement>,
    'type' | 'name' | 'value' | 'onChange' | 'onBlur' | 'placeholder'
  > & {
    variant: 'ROUNDED' | 'SQUARED';
    error: string | null;
  }
>;

const TextInput: React.FC<IProps> = ({ ...props }) => {
  return (
    <>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </>
  );
};

export default TextInput;
