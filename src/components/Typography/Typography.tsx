import React, { PropsWithChildren } from 'react';
import classes from './Typography.module.scss';

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
  const htmlTagClassMapping: Record<string, string> = {
    h1: classes['display-large'],
    h2: classes['display-medium'],
    h3: classes['display-small'],
    h4: classes['heading-large'],
    h5: classes['heading-medium'],
    p: classes['body-large'],
    span: classes['body-medium'],
  };

  return (
    <Component
      className={`${htmlTagClassMapping[as]} ${className}`.trim()}
      onClick={props.onClick}
    >
      {children}
    </Component>
  );
};

export default Typography;
