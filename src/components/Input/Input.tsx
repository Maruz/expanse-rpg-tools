/** @jsx jsx */
import { jsx } from '@emotion/react';
import { forwardRef } from 'react';

import { styles } from './Input.styles';

export type TInput = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, TInput>(
  ({ type = 'text', ...props }, ref) => (
    <input css={styles.input} type={type} ref={ref} {...props} />
  ),
);
