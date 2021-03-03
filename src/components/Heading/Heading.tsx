/** @jsx jsx */
import { jsx } from '@emotion/react';
import { FC } from 'react';

import { styles } from './Heading.styles';

export interface IHeading extends React.HTMLAttributes<HTMLOrSVGElement> {
  tag?: keyof JSX.IntrinsicElements;
}

export const Heading: FC<IHeading> = ({
  children,
  tag: Tag = 'h1',
  ...props
}) => (
  <Tag css={styles.heading} {...props}>
    {children}
  </Tag>
);
