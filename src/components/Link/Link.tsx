/** @jsx jsx */
import { jsx } from '@emotion/react';
import { FC } from 'react';

import { styles } from './Link.styles';

export interface ILink extends React.HTMLAttributes<HTMLElement> {
  href: string;
}

export const Link: FC<ILink> = ({ children, href, ...props }) => (
  <a css={styles.link} href={href} {...props}>
    {children}
  </a>
);
