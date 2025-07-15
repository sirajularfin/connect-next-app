import React, { PropsWithChildren } from 'react';

type TextProps = React.HTMLAttributes<HTMLParagraphElement> &
  React.HTMLAttributes<HTMLHeadingElement> & {
    as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'span';
  };

const Typography: React.FC<PropsWithChildren<TextProps>> = ({
  as = 'p',
  children,
  className = '',
  ...props
}) => {
  const Component = as; // dynamic tag name

  return (
    <Component className={className} onClick={props.onClick}>
      {children}
    </Component>
  );
};

export default Typography;
