/** @jsx jsx */
import { jsx } from '@emotion/react';
import { FC } from 'react';

import { styles } from './Form.styles';

export type TForm = React.HTMLAttributes<HTMLElement>;

export const Form: FC<TForm> = ({ children, ...props }) => (
  <form css={styles.form} {...props}>
    {children}
  </form>
);
