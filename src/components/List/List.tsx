/** @jsx jsx */
import { jsx } from '@emotion/react';
import { FC } from 'react';

import { styles } from './List.styles';

export interface IList extends React.HTMLAttributes<HTMLOrSVGElement> {
  tag?: keyof JSX.IntrinsicElements;
}

export const List: FC<IList> = ({ children, tag: Tag = 'ul', ...props }) => (
  <Tag css={styles.list} {...props}>
    {children}
  </Tag>
);
