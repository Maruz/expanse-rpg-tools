/** @jsx jsx */
import { jsx } from '@emotion/react';
import { FC } from 'react';

import { styles } from './Divider.styles';

export type TDivider = React.HTMLAttributes<HTMLElement>;

export const Divider: FC<TDivider> = (props) => (
  <hr css={styles.divider} {...props} />
);
