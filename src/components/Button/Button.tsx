/** @jsx jsx */
import { jsx } from '@emotion/react';
import { FC } from 'react';

import { styles } from './Button.styles';

export interface IButton extends React.HTMLAttributes<HTMLElement> {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'reset' | 'submit';
}

export const Button: FC<IButton> = ({
  children,
  onClick,
  type = 'button',
  ...props
}) => (
  <button css={styles.button} type={type} onClick={onClick} {...props}>
    {children}
  </button>
);
