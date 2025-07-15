import React from 'react';

import classes from './CircularProgress.module.scss';

interface IProps {
  size?: number;
  color?: string;
  thickness?: number;
}

const CircularProgress: React.FC<IProps> = ({
  size = 24,
  thickness = 4,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 44 44"
    className={classes.container}
  >
    <circle stroke={props.color} strokeWidth={thickness}>
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 22 22"
        to="360 22 22"
        dur="1s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);

export default CircularProgress;
