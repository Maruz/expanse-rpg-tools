/** @jsx jsx */
import { jsx } from '@emotion/react';
import { FC } from 'react';

import { styles } from './Label.styles';

export interface ILabel extends React.HTMLAttributes<HTMLElement> {
  htmlFor: string;
}

export const Label: FC<ILabel> = ({ children, htmlFor, ...props }) => (
  <label css={styles.label} htmlFor={htmlFor} {...props}>
    {children}
  </label>
);
