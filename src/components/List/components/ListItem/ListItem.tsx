/** @jsx jsx */
import { jsx } from '@emotion/react';
import { FC } from 'react';

import { styles } from './ListItem.styles';

export interface IListItem extends React.HTMLAttributes<HTMLOrSVGElement> {
  tag?: keyof JSX.IntrinsicElements;
}

export const ListItem: FC<IListItem> = ({
  children,
  tag: Tag = 'li',
  ...props
}) => (
  <Tag css={styles.listItem} {...props}>
    {children}
  </Tag>
);
